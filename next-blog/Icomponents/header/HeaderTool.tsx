import { FC } from "react";
import PostCreateButton from "../home/CreateButton";

const HeaderTool: FC = () => {
  return (
    <div className="flex items-center gap-4 justify-end">
      <PostCreateButton />
    </div>
  );
};

export default HeaderTool;
