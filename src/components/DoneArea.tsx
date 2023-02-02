import React from "react";

const DoneArea = (props: any) => {
  const { completeTodos, onClickReturn } = props;

  return (
    <div className="todo-area">
      <ul>
        {completeTodos.map((todo: any, index: any) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DoneArea;
