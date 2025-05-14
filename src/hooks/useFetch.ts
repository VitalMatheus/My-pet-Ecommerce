
import { useEffect, useState } from 'react';
import { Product } from '@/types/product';

export function useFetch(url: string) {
  const [data, setData] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Erro: ${res.status}`);
        }

        const json = await res.json();

        if (isMounted) {
          setData(json);
        }
      } catch (error: any) {
        if (isMounted) {
          setError(error.message || 'Error searching data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
