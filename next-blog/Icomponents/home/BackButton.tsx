"use client";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="rounded-sm"
      onClick={(e) => {
        e.preventDefault();
        router.back();
      }}
    >
      <Undo2 />
      返回
    </Button>
  );
}
