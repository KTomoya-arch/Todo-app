import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

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
        <Input
          type="text"
          placeholder="タスクを入力する"
          value={inputTodo}
          onChange={onChangeTodoText}
        />
        <Button className="add" variant="contained" onClick={onClickAdd}>
          追加
        </Button>
      </div>
    </>
  );
};

export default InputItem;
