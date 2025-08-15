"use client"
import { useState, FormEvent, ChangeEvent } from 'react';

interface LoginPageProps {
  onLogin: (e: FormEvent) => void;
}
export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(e); // Simulate successful login
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-100">
      <h2 className="text-3xl font-light text-center text-gray-700 mb-6">Welcome back!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all duration-200"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all duration-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-300"
        >
          Login
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account? <a href="#" className="text-rose-500 hover:underline">Sign up</a>
      </div>
    </div>
  );
}