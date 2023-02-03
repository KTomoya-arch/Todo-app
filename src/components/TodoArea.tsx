import { Todo } from "../types/todo";

const TodoArea = ({
  todoText,
  onClickComplete,
  onClickEdit,
  onClickDelete,
}: {
  todoText: Todo[];
  onClickComplete: (id: string) => void;
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
}) => {
  return (
    <div className="todo-area">
      <ul>
        {todoText.map((todo, index) => {
          return (
            <div key={todo.id}>
              <li>{todo.content}</li>
              <button onClick={() => onClickComplete(todo.id)}>完了</button>
              <button
                onChange={(e) => e.preventDefault()}
                onClick={() => onClickEdit(todo.id)}
              >
                編集
              </button>
              <button onClick={() => onClickDelete(todo.id)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoArea;
