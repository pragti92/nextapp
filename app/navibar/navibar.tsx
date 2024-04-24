import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

export function ComplexNavibar() {

return ( <nav
    class="block w-full max-w-screen-xl px-4 py-2 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div class="container flex flex-wrap items-center justify-between mx-auto text-blue-gray-900">
      <a href="#"
        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        Home
      </a>
      <a href="/about"
        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        About Us
      </a>
      <a href="/career"
        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        Career
      </a>
      <a href="/contact"
        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        Contact Us
      </a> 
   </div>
  </nav>
);
}
<script src="node_modules/@material-tailwind/html/scripts/collapse.js"></script>
