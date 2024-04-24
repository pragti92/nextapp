"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { ComplexNavibar } from "../navibar/navibar";
import { FooterWithSitemap } from "../footer/footer";
import { SidebarWithSearch } from "../sidebaroptions/sidebaroptions";
import { ContactForm } from "./form/form";
export default function Home() {

  return (
    <div>
    <ThemeProvider>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <ComplexNavibar></ComplexNavibar>
          <div className="flex w-full">
            <div className="basis-3/12">
              <SidebarWithSearch></SidebarWithSearch>
            </div>
            <div className="basis-9/12">
              <ContactForm></ContactForm>
            </div >
            
          </div>
          <div className="flex w-full"> <FooterWithSitemap></FooterWithSitemap></div>
        </main>
      </ThemeProvider>
    </div>
  );
}
