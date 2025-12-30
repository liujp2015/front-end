"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React, { FC, useCallback, useState } from "react";

export const PostDeleteButton: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [pedding, setPedding] = useState(false);

  const changeOpen = useCallback((value: boolean) => {
    setOpen(value);
  }, []);
  return (
    <div>
      <AlertDialog open={open} onOpenChange={changeOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <Trash2 />
            删除
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent onEscapeKeyDown={(event) => event.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle>是否确认删除该文章？</AlertDialogTitle>
            <AlertDialogDescription>
              当前不支持软删除，删除文章后将无法恢复
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={pedding}>取消</AlertDialogCancel>
            <AlertDialogAction disabled={pedding}>确认</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
