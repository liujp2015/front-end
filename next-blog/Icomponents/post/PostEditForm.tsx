import { queryPostItemById } from "@/app/actions/post";
import { isNil } from "@/lib/utils";
import { FC } from "react";
import { notFound } from "next/navigation";
import { PostActionForm } from "./action-form";

export const PostEditForm: FC<{ id: string }> = async ({ id }) => {
  const post = await queryPostItemById(id);
  if (isNil(post)) return notFound();
  return <PostActionForm type="update" item={post!} />;
};
