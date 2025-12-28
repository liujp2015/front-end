import { Tools } from "@/Icomponents/home/Tools";
import clsx from "clsx";
import { queryPostPaginate } from "./actions/post";
import { redirect } from "next/navigation";
import { IPaginateQueryProps } from "@/Icomponents/paginate/types";
import { isNil } from "@/lib/utils";

async function Page({
  searchParams,
}: {
  searchParams: Promise<IPaginateQueryProps>;
}) {
  const { page: currentPage, limit = "8" } = await searchParams;
  // 当没有传入当前页或当前页小于1时，设置为第1页
  const page =
    isNil(currentPage) || Number(currentPage) < 1 ? 1 : Number(currentPage);

  const { items, meta } = await queryPostPaginate({
    page: Number(page),
    limit: Number(limit),
  });

  if (meta.totalPages && meta.totalPages > 0 && page > meta.totalPages) {
    return redirect("/");
  }
  console.log(items.length);
  return (
    <div className="flex flex-auto flex-col mt-20 items-center">
      <Tools className="max-w-[90%] md:max-w-[80%] mb-5" />
      <div className={clsx("w-full", "max-w-[90%] md:max-w-[80%] mb-5")}>
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default Page;
