"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Light from "/public/icons/light.svg";
import Night from "/public/icons/night.svg";
import style from "./DarkModeTheme.module.css";
import { ThemeContext, contextTypeTheme } from "@/app/context/ThemeContext";

const DarkModeTheme = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  console.log(mode);

  return (
    <div className={style.container} onClick={toggleMode}>
      <Image className="light" src={Light} width={12} height={12} alt="light" />
      <Image className="night" src={Night} width={12} height={12} alt="light" />
      <div
        className={style.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeTheme;
