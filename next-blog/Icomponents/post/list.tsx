import { FC } from "react";
import { PostEditButton } from "./PostEditButton";
import { PostDeleteButton } from "./PostDeleteButton";
import { cn } from "@/lib/utils";

export const Buttons: FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => {
  return (
    <div className={cn("flex items-center [&>time]:ml-2", className)}>
      <PostEditButton id={id} />
      <PostDeleteButton id={id} />
    </div>
  );
};

export const PostActions: FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => <Buttons id={id} className={className} />;
