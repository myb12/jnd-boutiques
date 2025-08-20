import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | JND Boutiques Bd",
  description: "This is Shop Page for JND Boutiques Bd",
  // other metadata
};

const Shop = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default Shop;
