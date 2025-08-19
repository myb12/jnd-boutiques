"use client"

import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { setCredentials } from '@/store/auth/authSlice';
import Link from 'next/link';
import apiClient from '@/lib/axios';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post('/auth/login', {
        email,
        password,
      });

      const { user } = response.data;

      // Dispatch the action to save user and token to the Redux store
      dispatch(setCredentials({ user }));

      // Redirect to the dashboard
      router.push(callbackUrl);

    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          // Server responded with a status code that falls out of the range of 2xx
          setError(err.response.data.message || 'Login failed. Please check your credentials.');
        } else {
          // Request was made but no response was received
          setError('Network error. Please try again.');
        }
      } else {
        // Something else happened while setting up the request
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Login failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:min-w-[450px] max-w-md p-8 rounded-lg shadow-xl border border-gray-100 bg-[#F6F7FB] mt-32.5 sm:mt-40 lg:mt-20 xl:mt-45 mx-auto">
      <h2 className="text-3xl font-light text-center text-gray-700 mb-6">Welcome back!</h2>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
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
          className="font-medium text-white bg-blue py-3 px-10.5 rounded-md ease-out duration-200 hover:bg-blue-dark w-full text-center"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Don't have an account? <Link href="/register" className="text-[var(--color-blue)] hover:underline">Sign up</Link>
      </div>
    </div>
  );
}
