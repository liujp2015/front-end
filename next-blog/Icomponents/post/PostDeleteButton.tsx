import React, { FC } from "react";

export const PostDeleteButton: FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <AlertDialog open={open} onOpenChange={changeOpen}></AlertDialog>
    </div>
  );
};
