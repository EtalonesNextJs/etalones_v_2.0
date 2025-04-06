"use client";

import React from "react";
import { Toaster } from "@/components/ui/sonner";
import NavbarPage from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <div className="relative flex flex-1 flex-col">
        <NavbarPage/>
        <main>
          {children}
          <Toaster />
        </main>
        <Footer/>
    </div>
  );
}