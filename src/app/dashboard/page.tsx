"use client";

import React, { useContext, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { mode, toggleMode } = useContext(ThemeContext);

  const [text, setText] = useState("");

  return (
    <div className={`h-screen text-center mt-20 `}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-[425px] ${
            mode === "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <DialogHeader>
            <DialogDescription>
              Saytga kirish uchun parolni tering
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="name"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
