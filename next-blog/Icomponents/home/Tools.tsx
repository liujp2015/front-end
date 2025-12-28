import { FC } from "react";
import BackButton from "./BackButton";
import PostCreateButton from "./CreateButton";
import clsx from "clsx";

export const Tools: FC<{ back?: boolean; className?: string }> = ({
  back,
  className,
}) => {
  return (
    <div
      className={clsx("flex justify-between my-5 w-full max-h-12", className)}
    >
      {back && <BackButton />}
      <PostCreateButton />
    </div>
  );
};
