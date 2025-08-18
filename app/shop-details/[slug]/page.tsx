import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details Page | JND Boutiques BD",
  description: "This is Shop Details page for JND Boutiques BD",
};

const ShopDetailsPage = ({ params }: { params: { slug: string } }) => {
const { slug } = params;

  return (
    <main>
      <ShopDetails slug={slug} />
    </main>
  );
};

export default ShopDetailsPage;
