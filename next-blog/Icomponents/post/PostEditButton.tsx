import { Button as CNButton } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

export const PostEditButton: FC<{ id: string }> = ({ id }) => {
  return (
    <CNButton asChild className="mr-3">
      <Link href={`/posts/${id}`}>
        <UserPen />
        编辑
      </Link>
    </CNButton>
  );
};
