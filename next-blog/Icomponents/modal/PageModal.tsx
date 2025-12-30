"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { PageModalProps } from "./types";
import clsx from "clsx";

export const PageModal: FC<PageModalProps> = ({
  title,
  match,
  className,
  children,
}) => {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const close = useCallback(() => router.back(), []);

  return (
    <Dialog open onOpenChange={close}>
      <DialogContent className={clsx("sm:max-w-[80%]", className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription />
          <div className="px-3 w-full max-h-[80vh] overflow-y-auto">
            {children}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
