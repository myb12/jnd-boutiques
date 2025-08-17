"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '@/lib/axios';
import { clearCredentials } from '@/store/authSlice';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch()  
  
  const handleLogout = async() => {
      try {
          await apiClient.post('/auth/logout');
          dispatch(clearCredentials());
      } catch (error) {
          console.error('Logout failed', error);
          dispatch(clearCredentials());
      }
  };


  return (
    <header className="flex w-full items-center bg-white px-4">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5">
                <Image
                    src="/images/jnd-logo.png"
                    alt="JND Boutiques official logo, a brand for women's fashion"
                    width={100}
                    height={72}
                    priority
                />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                id="navbarToggler"
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2  focus:ring-rose-500 lg:hidden ${
                  navbarOpen ? 'navbarTogglerActive' : ''
                }`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-[#637381]"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-[#637381]"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-[#637381]"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !navbarOpen ? 'hidden' : ''
                }`}
              >
                <ul className="block lg:flex">
                  <li>
                    <Link
                      href="/"
                      className="flex py-2 text-base font-medium text-body-color lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payment"
                      className="flex py-2 text-base font-medium text-body-color lg:ml-12 lg:inline-flex"
                    >
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="flex py-2 text-base font-medium text-body-color lg:ml-12 lg:inline-flex"
                    >
                      Features
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {
                user?.role === 'ADMIN' && (<div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <Link
                            href="/admin/dashboard"
                            className="px-7 py-3 text-base font-medium  hover:text-primary"
                        >
                            Dashboard
                        </Link>
                        <button
                            className="px-7 py-3 text-base font-medium  hover:text-primary cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>)
            }

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;