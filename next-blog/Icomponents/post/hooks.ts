import { IPost } from "@/app/actions/types";

export const usePostActionForm = (params: {
  type: "create" | "update";
  item: IPost;
}) => {};
/**
 * 生成表单submit(提交)函数用于操作数据的钩子
 * @param params
 */
export const usePostFormSubmitHandler = (
  params: { type: "create" } | { type: "update"; id: string }
) => {};
