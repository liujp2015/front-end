"use server";
import { isNil, paginate } from "@/lib/utils";
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

/**
 * 根据ID查询文章信息
 * @param id
 */
export const queryPostItemById = async (id: string): Promise<IPost | null> => {
  const posts = await readDbFile();
  const item = posts.find((post) => post.id === id);
  if (isNil(item)) throw new Error("post not exists!");
  return item!;
};
