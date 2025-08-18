"use client"

import Categories from '@/components/Home/Categories';
import Hero from '@/components/Home/Hero';
import NewArrival from '@/components/Home/NewArrivals';

export default function App() {

  return (
    <main>
      <Hero/>
      <Categories/>
      <NewArrival />
    </main>
  );
}