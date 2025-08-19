
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow flex items-center justify-center p-4 pt-32.5 sm:pt-40 lg:pt-20 xl:pt-45">{children}</main>
  );
}
