import { PostCreateForm } from "@/Icomponents/post/PostCreateForm";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex flex-col flex-auto mt-20 items-center">
      <div className="flex flex-auto flex-col space-y-6  bg-white/90 min-w-full lg:min-w-[60%] px-5 py-3 rounded-md  max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] flex-auto mb-5">
        <PostCreateForm />
      </div>
    </div>
  );
};

export default Page;
