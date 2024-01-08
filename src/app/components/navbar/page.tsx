"use client";

import Link from "next/link";
import React from "react";
import DarkModeTheme from "../DarkModeTheme/DarkModeTheme";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const routes = [
  {
    id: "1",
    title: "Home",
    url: "/",
  },
  {
    id: "2",
    title: "About",
    url: "/about",
  },
  {
    id: "3",
    title: "Blog",
    url: "/blog",
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "5",
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: "6",
    title: "Portfolio",
    url: "/portfolio",
  },
];

const NavbarPage = () => {
  const { data, status } = useSession();

  return (
    <div className="flex justify-between items-center">
      <div>Logo</div>
      <div className="flex gap-4 items-center">
        <DarkModeTheme />
        {routes?.map((route) => (
          <Link key={route.id} href={route.url}>
            {route.title}
          </Link>
        ))}
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Image
              src={data?.user?.image as string}
              alt="user"
              width={36}
              height={36}
              className="rounded-full"
            />
            <button
              className="px-2 h-8  flex justify-center items-center border border-gray-400 rounded-[20px]"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="w-[28px] h-[28px] rounded-full bg-slate-400"></div>
        )}
      </div>
    </div>
  );
};

export default NavbarPage;
