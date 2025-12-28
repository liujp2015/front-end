import BackButton from "@/Icomponents/home/BackButton";
import CreateButton from "@/Icomponents/home/CreateButton";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      首页
      <Link href="/test">test</Link>
      <BackButton />
      <CreateButton />
    </div>
  );
}

export default Page;
