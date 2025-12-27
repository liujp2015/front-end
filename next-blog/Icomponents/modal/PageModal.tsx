"use client";
import { Dialog } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useCallback } from "react";

export const PageModal: FC<PropsWithChildren> = () => {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const close = useCallback(() => router.back(), []);

  return (
    <Dialog open onOpenChange={close}>
      这个是弹窗
    </Dialog>
  );
};
