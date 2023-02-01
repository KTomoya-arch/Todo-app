import React from "react";

const TodoArea = (props: any) => {
  const { incompleteTodos } = props;

  return (
    <div className="todo-area">
      <ul>
        {incompleteTodos.map((todo: any) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
            </div>
          )
        })}
      </ul>
      <button>完了済みを削除</button>
      <button>やることをクリア</button>
    </div>
  );
};

export default TodoArea;
