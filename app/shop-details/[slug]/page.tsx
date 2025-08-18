import React, { use } from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Details Page | JND Boutiques BD",
  description: "This is Shop Details page for JND Boutiques BD",
};

const ShopDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
const { slug } = use(params);

  return (
    <main>
      <ShopDetails slug={slug} />
    </main>
  );
};

export default ShopDetailsPage;
