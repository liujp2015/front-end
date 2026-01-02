import { PaginationResult } from "prisma-paginate";
import { PaginateReturn } from "./types";
import { omit } from "lodash"; // 或者使用其他工具库

export const paginateTransform = <M, R extends PaginationResult<M[]>>(
  data: R
): PaginateReturn<M> => {
  const { result } = data;
  return {
    items: result,
    meta: {
      itemCount: result.length,
      totalItems: data.count,
      perPage: data.limit,
      totalPages: data.totalPages,
      currentPage: data.page,
      ...omit(data, ["result", "count", "limit", "page", "totalPages"]),
    },
  };
};
