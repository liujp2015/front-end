import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div>
      首页
      <Link href="/test">test</Link>
    </div>
  );
}

export default Page;
