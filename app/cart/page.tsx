import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart Page | JND Boutiques BD",
  description: "This is Cart Page for JND Boutiques BD",
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
