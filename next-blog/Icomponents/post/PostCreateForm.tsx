"use client";
import { FC, useCallback, useRef, useState } from "react";
import { PostCreateFormRef } from "./types";
import { PostActionForm } from "./action-form";
import { Save } from "lucide-react";
import BackButton from "../home/BackButton";
import { Button } from "@/components/ui/button";

export const PostCreateForm: FC = () => {
  const ref = useRef<PostCreateFormRef>(null);
  const [pedding, setPedding] = useState(false);

  const changePedding = useCallback((value: boolean) => setPedding(value), []);

  return (
    <>
      <div className="flex justify-between">
        <BackButton></BackButton>
        <Button
          disabled={pedding}
          onClick={useCallback(async (e) => {
            setPedding(true);
            if (ref.current && typeof ref.current.create === "function") {
              await ref.current.create(e);
            }
            setPedding(false);
          }, [])}
        >
          {pedding ? "保存中" : "保存"}
          <Save />
        </Button>
      </div>
      <PostActionForm ref={ref} type="create" setPedding={changePedding} />
    </>
  );
};
