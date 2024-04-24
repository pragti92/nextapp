"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { FooterWithSitemap } from "../footer/footer";
import { ComplexNavibar } from "../navibar/navibar";
import { SidebarWithSearch } from "../sidebaroptions/sidebaroptions";
import { InnerContent } from "./innercontent/innercontent";
export default function Home() {

  return (
    <div>
    <ThemeProvider>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <ComplexNavibar></ComplexNavibar>
          <div className="flex w-full">
           
            <div className="basis-9/12">
              <InnerContent></InnerContent>
            </div>
          </div>
        </main>
        <div className="flex w-full"> <FooterWithSitemap></FooterWithSitemap></div>
      </ThemeProvider>
    </div>
  );
}
