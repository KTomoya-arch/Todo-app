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
              <button>完了</button>
              <button>削除</button>
            </div>
          )
        })}
      </ul>
      
    </div>
  );
};

export default TodoArea;
