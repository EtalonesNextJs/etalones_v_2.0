"use client";

import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation/Navigation";
import NavbarPage from "@/components/Navbar/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <><div className="relative flex flex-1 flex-col">
        {/* <Navigation/> */}
        <NavbarPage/>
        <main>
          {children}
          <Toaster />
        </main>
    </div></>
  );
}