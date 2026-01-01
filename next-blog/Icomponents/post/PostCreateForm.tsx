"use client";
import { FC, useCallback, useRef, useState } from "react";
import { PostCreateFormRef } from "./types";
import { PostActionForm } from "./action-form";
import { Save } from "lucide-react";

export const PostCreateForm: FC = () => {
  const ref = useRef<PostCreateFormRef>(null);
  const [pedding, setPedding] = useState(false);

  const changePedding = useCallback((value: boolean) => setPedding(value), []);

  return (
    <div>
      <button
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
      </button>
      <PostActionForm ref={ref} type="create" setPedding={changePedding} />;
    </div>
  );
};
