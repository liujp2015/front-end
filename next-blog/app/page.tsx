import { Tools } from "@/Icomponents/home/Tools";
import clsx from "clsx";
import { queryPostPaginate, queryPostPaginateByPrisma } from "./actions/post";
import { redirect } from "next/navigation";
import { IPaginateQueryProps } from "@/Icomponents/paginate/types";
import { isNil } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { PostDeleteButton } from "@/Icomponents/post/PostDeleteButton";
import { PageModal } from "@/Icomponents/modal/PageModal";
import { PostActions } from "@/Icomponents/post/list";

async function Page({
  searchParams,
}: {
  searchParams: Promise<IPaginateQueryProps>;
}) {
  const { page: currentPage, limit = "8" } = await searchParams;
  // 当没有传入当前页或当前页小于1时，设置为第1页
  const page =
    isNil(currentPage) || Number(currentPage) < 1 ? 1 : Number(currentPage);
  const { items, meta } = await queryPostPaginateByPrisma({
    page: Number(page),
    limit: Number(limit),
  });

  if (meta.totalPages && meta.totalPages > 0 && page > meta.totalPages) {
    return redirect("/");
  }
  console.log("items", items);
  console.log("meta", meta);
  return (
    <div className="flex flex-auto flex-col mt-20 items-center">
      <Tools className="max-w-[90%] md:max-w-[80%] mb-5" />
      <div
        className={clsx(
          "w-full",
          "max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] flex-auto mb-5"
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="post-item flex flex-col rounded-md mb-5 backdrop-blur-md  "
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style={{ "--bg-img": `url(${item.thumb})` } as any}
          >
            <Link
              className=" relative block h-36 md:h-48 lg:h-72  "
              href={`/posts/${item.id}`}
            >
              <Image
                src={item.thumb}
                alt={item.title}
                fill
                priority
                sizes="100%"
                unoptimized
                className="rounded-tl-md rounded-tr-md opacity-60 "
              />
            </Link>
            <div className="rounded-bl-md rounded-br-md w-full bg-zinc-100/80 dark:bg-zinc-800/50   px-5 ">
              <div className="py-3">
                <Link
                  href={`/posts/${item.id}`}
                  className="w-full block overflow-hidden text-foreground"
                >
                  <h2 className="truncate animate-decoration animate-decoration-lg text-lg font-bold">
                    {item.title}
                  </h2>
                </Link>
                <div className="py-3 text-muted-foreground">
                  {isNil(item.summary)
                    ? item.body.substring(0, 99)
                    : item.summary}
                </div>
                <div className="py-3 flex justify-between text-muted-foreground">
                  <div className="flex items-center">
                    <span>
                      <Calendar />
                    </span>
                    <time className="truncate ml-2">2024年8月10日</time>
                  </div>
                  <PostActions id={item.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
