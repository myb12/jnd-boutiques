"use client"

import { useState, FormEvent } from 'react';
import Header from './login/components/layout/Header';
import Footer from './login/components/layout/Footer';
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
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        {isLoggedIn ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </main>
      <Footer />
    </div>
  );
}