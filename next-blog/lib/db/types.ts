import { PaginateMeta } from "@/app/actions/types";

/**
 * 分页返回数据
 */
export interface PaginateReturn<E> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: PaginateMeta & Record<string, any>;
  items: E[];
}
