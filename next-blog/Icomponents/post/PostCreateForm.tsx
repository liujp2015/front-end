"use client";
import { FC, useRef } from "react";
import { PostCreateFormRef } from "./types";
import { PostActionForm } from "./action-form";

export const PostCreateForm: FC = () => {
  const ref = useRef<PostCreateFormRef>(null);
  return <PostActionForm ref={ref} type="create" />;
};
