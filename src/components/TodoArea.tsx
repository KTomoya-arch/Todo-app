import { Todo } from "../types/todo";

const TodoArea = ({
  todoText,
  onClickComplete,
  onClickEdit,
  onClickDelete,
  onClickUpdate,
  editTarget,
  onChangeUpdateText,
  editInput,
}: {
  todoText: Todo[];
  onClickComplete: (id: string, index: number) => void;
  onClickEdit: (id: string, index: number) => void;
  onClickDelete: (id: string, index: number) => void;
  onClickUpdate: (id: string, index: number) => void;
  editTarget: string;
  onChangeUpdateText: (e: any) => void;
  editInput: string;
}) => {
  return (
    <div className="todo-area">
      <ul>
        {todoText.map((todo, index) => {
          return (
            <div key={todo.id}>
              {editTarget === todo.id && (
                <>
                  <li>
                    <input
                      type="text"
                      value={editInput}
                      onChange={onChangeUpdateText}
                    />
                  </li>
                  <button onClick={() => onClickUpdate(todo.id, index)}>
                    更新
                  </button>
                </>
              )}
              {editTarget === todo.id || (
                <>
                  <li>{todo.content}</li>
                  <button onClick={() => onClickComplete(todo.id, index)}>
                    完了
                  </button>
                  <button onClick={() => onClickEdit(todo.id, index)}>
                    編集
                  </button>
                  <button onClick={() => onClickDelete(todo.id, index)}>
                    削除
                  </button>
                </>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoArea;
