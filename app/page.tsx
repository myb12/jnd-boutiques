"use client"

import { useState, FormEvent } from 'react';
import Dashboard from './dashboard/page';
import LoginPage from './login/page';

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
    <div>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginPage  />
        )}
    </div>
  );
}