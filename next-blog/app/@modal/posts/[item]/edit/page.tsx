import { Details } from "@/Icomponents/collapsible/Detial";
import { PageModal } from "@/Icomponents/modal/PageModal";
import { PostEditForm } from "@/Icomponents/post/PostEditForm";
import React, { FC } from "react";

const Page: FC<{ params: { item: string } }> = async ({ params }) => {
  const { item } = await params;
  console.log(item);
  return (
    <div>
      <PageModal title="编辑文章" className="min-w-full lg:min-w-[60%]">
        编辑
        {/* <Details summary="点击"></Details> */}
        <PostEditForm id={item}></PostEditForm>
      </PageModal>
    </div>
  );
};
export default Page;
