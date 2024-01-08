"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex gap-4 h-[90vh] py-10">
      <button
        className="px-2 h-8  flex justify-center items-center border border-gray-400 rounded-[20px]"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>

      <button
        className="px-2 h-8  flex justify-center items-center border border-gray-400 rounded-[20px]"
        onClick={() => signIn("github")}
      >
        Login with Github
      </button>
    </div>
  );
};

export default LoginPage;
