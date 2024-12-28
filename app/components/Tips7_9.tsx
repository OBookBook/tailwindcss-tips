import React from "react";
import Button from "./Button";

const Tips7 = () => {
  return (
    <div className="flex gap-3">
      <Button className="bg-slate-600">作成</Button>
      <Button className="bg-red-600">削除</Button>
      <Button pending={true}>保存</Button>
    </div>
  );
};

export default Tips7;
