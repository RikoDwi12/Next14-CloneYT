import React from "react";
import Image from "next/image";
import { ModeToggle } from "./modeToggle";

export default function Footer() {
  return (
    <footer className="p-[16px] lg:p-[28px]  bg-[#2C2C2C]  text-white text-center flex flex-row justify-between items-center">
      <div className="">@2022 copyright</div>
      <div>
        <ModeToggle />
      </div>
    </footer>
  );
}
