import React from "react";
import Button2 from "./Button2";

const Tips9 = () => {
  return (
    <div className="flex gap-3">
      <Button2 variant="primary">作成</Button2>
      <Button2 variant="denger">削除</Button2>
      <Button2 variant="secondary">保存</Button2>
      <Button2 size="sm" className="hover:bg-orange-500">
        編集
      </Button2>
    </div>
  );
};

export default Tips9;
