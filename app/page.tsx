"use client"

import Hero from '@/components/Home/Hero';
import { useState, FormEvent } from 'react';
// Main component for the entire app. Export this as default.
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Simple state to simulate user login.
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      <Hero/>
    </main>
  );
}