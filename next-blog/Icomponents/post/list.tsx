import { FC } from "react";

export const Buttons: FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => {
  return (
    <div className={cn("flex items-center [&>time]:ml-2", className)}>
      <PostEditButton id={id} />
      <PostDelete id={id} />
    </div>
  );
};

export const PostActions: FC<{ id: string; className?: string }> = ({
  id,
  className,
}) => <Buttons id={id} className={className} />;
