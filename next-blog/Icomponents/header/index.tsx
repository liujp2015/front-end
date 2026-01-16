import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderTool from "./HeaderTool";

export default function Header() {
  return (
    <header className="fixed h-16 top-0 w-full z-40  mt-0 bg-white/40 transition-[background-color] ease-in-out duration-300 flex flex-auto flex-col items-center">
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] flex-auto mb-5 flex h-14 w-full justify-between flex-row mb-0 transition-[height] ease-in-out duration-300 ">
        <HeaderLogo />
        <HeaderNav></HeaderNav>
        <HeaderTool></HeaderTool>
      </div>
    </header>
  );
}
