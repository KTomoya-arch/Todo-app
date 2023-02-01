import React from "react";

const TodoArea = (props: any) => {
  const { sample } = props;
  return (
    <div className="todo-area">
      <ul>
        <li>ダミーのTODO</li>
        <li></li>
      </ul>
      <button>完了済みを削除</button>
      <button>やることをクリア</button>
    </div>
  );
};

export default TodoArea;
