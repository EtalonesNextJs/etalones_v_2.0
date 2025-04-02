"use client";

import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/Navigation/Navigation";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <><div className="relative flex flex-1 flex-col">
        <Navigation/>
        <main>
          {children}
          <Toaster />
        </main>
    </div></>
  );
}