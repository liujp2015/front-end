import { IPost } from "@/app/actions/types";
import { useForm } from "react-hook-form";
import type { DeepNonNullable } from "utility-types";
import { PostCreateData, PostFormData, PostUpdateData } from "./types";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

export const usePostActionForm = (
  params:
    | {
        type: "create";
      }
    | { type: "update"; item: IPost }
) => {
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const defaultValues = useMemo(() => {
    if (params.type === "create") {
      return {
        title: "",
        body: "",
        thumb: "",
        summary: "",
      } as DeepNonNullable<PostCreateData>;
    }
    return {
      title: params.item.title,
      body: params.item.body,
      thumb: params.item.thumb,
      summary: params.item.summary,
    } as DeepNonNullable<PostUpdateData>;
  }, [params.type]);
  return useForm<DeepNonNullable<PostFormData>>({ defaultValues });
};
/**
 * 生成表单submit(提交)函数用于操作数据的钩子
 * @param params
 */
export const usePostFormSubmitHandler = (
  params: { type: "create" } | { type: "update"; id: string }
) => {
  const router = useRouter();
  return useCallback(
    async (data: PostFormData) => {
      //清除对象
      //创建或者更新
    },
    [params.type, params.id]
  );
};
