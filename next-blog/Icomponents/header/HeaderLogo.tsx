import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeaderLogo() {
  return (
    <div className="flex flex-none max-w-28">
      <Link href={"/"} className=" block">
        <Image
          src="/next.svg"
          alt="logo"
          sizes="100%"
          width={200}
          height={200}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </Link>
    </div>
  );
}
