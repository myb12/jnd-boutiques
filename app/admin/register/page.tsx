"use client"

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import apiClient from '../../../lib/axios';
import axios from 'axios';

export default function RegistrationPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post('/auth/register', {
        name,
        email,
        password
      });

      console.log('Registration successful:', response.data);
      
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'An error occurred during registration.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Registration failed:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full md:min-w-[450px] max-w-md p-8 rounded-lg shadow-xl border border-gray-100 bg-[#F6F7FB]">
      <h2 className="text-3xl font-light text-center text-gray-700 mb-6">Create an account</h2>
      <form onSubmit={handleRegister}>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all duration-200"
            required
          />
        </div>
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
          className="w-full bg-rose-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Already have an account? <Link href="/admin/login" className="text-rose-500 hover:underline">Login</Link>
      </div>
    </div>
  );
}