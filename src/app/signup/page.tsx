"use client"
import { useState } from "react";
import { usePost } from "@/hooks/usePost";
import Image from "next/image";
import Link from "next/link";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { post, data, error, loading } = usePost("http://localhost:3001/signup");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await post({ email, password });
    if (response) {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="flex items-center justify-around w-full h-screen px-20">
      <Image src={"/signup/dogshopping.jpg"} alt="about us" width={"805"} height={"780"} />
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Create an Account</h1>
          <p className="text-xl font-medium">Enter your details below</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 w-full mt-10">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="text-base p-2 text-gray-600 border-b" placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-base p-2 text-gray-600 border-b" placeholder="Password" />
          <button
            type="submit"
            className="bg-red-600 text-white font-bold p-4 rounded"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div>
          {error &&
            error.split(',').map((err, index) => (
              <p key={index} className="text-red-600">
                {err.trim()}
              </p>
            ))}
        </div>

        {data && <p className="text-green-600">Account created successfully!</p>}
        <p className="text-base">Alredy have an account?
          <Link href="/login">
            <span className="font-medium text-blue-600 hover:underline"> Log in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;