"use client"

import Newsletter from '@/components/Common/Newsletter';
import BestSeller from '@/components/Home/BestSeller';
import Categories from '@/components/Home/Categories';
import CounDown from '@/components/Home/Countdown';
import Hero from '@/components/Home/Hero';
import NewArrival from '@/components/Home/NewArrivals';
import PromoBanner from '@/components/Home/PromoBanner';
import Testimonials from '@/components/Home/Testimonials';

export default function App() {

  return (
    <main>
      <Hero/>
      <Categories/>
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
}