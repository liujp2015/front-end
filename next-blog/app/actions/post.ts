"use server";
import { paginate } from "@/lib/utils";
import { IPost, PaginateOptions, PaginateReturn } from "./types";
import { readDbFile } from "@/lib/generator";

/**
 * 查询分页文章列表信息
 * @param options
 */
export const queryPostPaginate = async (
  options?: PaginateOptions
): Promise<PaginateReturn<IPost>> => {
  // 此处使用倒序,以便新增的文章可以排在最前面
  const posts = (await readDbFile()).reverse();
  return paginate(posts, { page: 1, limit: 8, ...options });
};
