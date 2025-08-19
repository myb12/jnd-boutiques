import React from "react";
import { Metadata } from "next";
import { Wishlist } from "@/components/Wishlist";

export const metadata: Metadata = {
  title: "Wishlist Page | JND Boutiques BD wishlist",
  description: "This is Wishlist Page for JND Boutiques BD",
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;