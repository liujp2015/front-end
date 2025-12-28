"use client";

import { FC, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button as CNButton } from "@/components/ui/button";
import { Plus } from "lucide-react"; // 或你用的图标

const Button: FC = () => {
  const searchParams = useSearchParams();
  const getUrlQuery = useMemo(() => {
    const query = searchParams.toString();
    return query ? `?${query}` : "";
  }, [searchParams]);

  return (
    <CNButton
      asChild
      className="ml-auto justify-end rounded-sm"
      variant="outline"
    >
      <Link href={`/posts/create${getUrlQuery}`}>
        <Plus className="mr-2 h-4 w-4" />
        创建
      </Link>
    </CNButton>
  );
};
const PostCreateButton = Button;
// 直接导出，无需 Suspense
export default PostCreateButton;
