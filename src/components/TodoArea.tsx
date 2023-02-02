import React from "react";

const TodoArea = (props: any) => {
  const { incompleteTodos, onClickEdit, onClickDelete } = props;


  return (
    <div className="todo-area">
      <ul>
        {incompleteTodos.map((todo: any, index: any) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button>完了</button>
              <button onClick={() => onClickEdit(index)}>編集</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          )
        })}
      </ul>
      
    </div>
  );
};

export default TodoArea;
