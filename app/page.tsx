"use client";

import { GetSessionParams, getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { ThemeContext } from "./context/ThemeContext";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface HashPasswordProps {
  btn: Boolean;
  setBtn: any;
}

export default function Home() {
  const [btn, setBtn] = useState<boolean>(true);
  const { status } = useSession();

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <div className="flex justify-between items-center min-h-[90vh]">
      <div className="text-4xl home-title font-[600] w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, est.
      </div>
      <Image
        src="https://images.pexels.com/photos/4046265/pexels-photo-4046265.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={500}
        height={500}
        alt="images"
      />
      {btn && <HashPassword btn={btn} setBtn={setBtn} />}
    </div>
  );
}

function HashPassword({ btn, setBtn }: HashPasswordProps) {
  const { mode } = useContext(ThemeContext);

  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleHashPassword = useCallback(() => {
    if (text.toLocaleLowerCase() === "oybek") {
      setSuccess("parol to'gri");
      setError("");
      setTimeout(() => {
        setBtn(false);
      }, 2000);
    } else {
      setSuccess("");
      setError(`kiritilgan parol xato : ${text}`);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [setBtn, text]);

  return (
    <div
      className={`fixed top-0 left-0   w-full h-screen flex items-center justify-center`}
    >
      <div className="fixed top-0 left-0 opacity-20 bg-gray-300 w-full h-screen"></div>
      <div
        className={`flex z-50 flex-col gap-4 items-center justify-center mt-20 w-[400px] h-[200px] px-4 rounded-xl ${
          mode === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <Label className="text-xl">Satyga kirish uchun parolni tering</Label>
        <Input
          type="text"
          value={text}
          className="bg-white"
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleHashPassword}>Submit</Button>
        {error !== "" && <div className="text-red-500">{error}</div>}
        {success !== "" && <div className="text-green-500">{success}</div>}
      </div>
    </div>
  );
}
