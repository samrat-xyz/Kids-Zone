"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // 🔸 Later: API call for credentials register
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:opacity-90"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="btn btn-outline w-full"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Redirect to Login */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
