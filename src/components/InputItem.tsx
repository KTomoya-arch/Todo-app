const InputItem = ({
  inputTodo,
  onChangeTodoText,
  onClickAdd,
}: {
  inputTodo: string;
  onChangeTodoText: (e: any) => void;
  onClickAdd: () => void;
}) => {
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="タスクを入力する"
          value={inputTodo}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
};

export default InputItem;
