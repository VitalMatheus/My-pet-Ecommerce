/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

type BodyType = {
  email: string;
  password: string;
}

interface PostResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  post: (body: BodyType) => Promise<void>;
}

export function usePost<T = any>(url: string): PostResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const post = async (body: BodyType) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Error: ${res.status}`);
      }

      const json = await res.json();
      setData(json);
      return json;
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, post };
}
