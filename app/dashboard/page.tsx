"use client"

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '@/store/authSlice';
import { RootState } from '@/store'; // Import the RootState type
import Link from 'next/link';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logOut());
    // In a real app, you would also clear any cookies or session here
  };

  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-xl">
      {user ? (
        <>
          <h2 className="text-2xl font-light text-gray-700 mb-4">
            Welcome, {user.name}!
          </h2>
          <p className="text-gray-600 mb-2">
            Email: {user.email}
          </p>
          <p className="text-gray-600 mb-6">
            You are successfully logged in. This is your personal dashboard.
          </p>

          <button
            onClick={handleLogout}
            className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            Logout
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-2xl font-light text-gray-700 mb-4">
            You are not logged in.
          </h2>
          <Link
            href="/login"
            className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            Login
          </Link>

          
        </div>
      )}

    </div>
  );
}
