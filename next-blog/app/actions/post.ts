"use server";
import { isNil } from "@/lib/utils";
import { IPost, PaginateOptions, PaginateReturn } from "./types";
import { readDbFile } from "@/lib/generator";
import { Post } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { paginateTransform } from "@/lib/db/utils";
import createPagination from "prisma-paginate"; // 修改这里：使用默认导入
import { omit } from "lodash";

// /**
//  * 查询分页文章列表信息
//  * @param options
//  */
// export const queryPostPaginate = async (
//   options?: PaginateOptions
// ): Promise<PaginateReturn<IPost>> => {
//   // 此处使用倒序,以便新增的文章可以排在最前面
//   const posts = (await readDbFile()).reverse();
//   return paginate(posts, { page: 1, limit: 8, ...options });
// };

// /**
//  * 查询分页文章列表信息
//  * @param options
//  */
// export const queryPostPaginate = async (
//   options?: PaginateOptions
// ): Promise<PaginateReturn<Post>> => {
//   const data = await paginate(prisma.post, {
//     orderBy: [{ updatedAt: "desc" }, { createdAt: "desc" }],
//     page: 1,
//     limit: 8,
//     ...options,
//   });
//   return paginateTransform(data);
// };

/**
 * 查询分页文章列表信息
 * @param options
 */
export const queryPostPaginateByPrisma = async (
  options?: PaginateOptions
): Promise<PaginateReturn<Post>> => {
  const { page = 1, limit = 8 } = options || {};
  const skip = (page - 1) * limit;
  // 并行查询：数据 + 总数
  const [data, total] = await Promise.all([
    prisma.post.findMany({
      skip,
      take: limit,
      where: {}, // 可选过滤
      orderBy: { createdAt: "desc" }, // 可选排序
    }),
    prisma.post.count({
      where: {}, // 必须和 findMany 的 where 一致！
    }),
  ]);
  const lastPage = Math.ceil(total / limit);
  return {
    items: data,
    meta: {
      itemCount: data.length,
      totalItems: total,
      perPage: limit,
      totalPages: lastPage,
      currentPage: page,
      ...omit(data, ["result", "count", "limit", "page", "totalPages"]),
    },
  };
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
