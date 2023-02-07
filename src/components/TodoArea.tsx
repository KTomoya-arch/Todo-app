import { Todo } from "../types/todo";
import { Button, Input, InputLabel, List, makeStyles } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";

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
  const ButtonA = styled(Button)`
    display: none;
  `;
  const Div = styled.div`
    display: flex;
    &:hover Button {
      display: block;
    }
  `;

  const FormG = styled(FormGroup)`
    width: 500px;
  `;
  return (
    <div className="todo-area">
      <ul>
        {todoText.map((todo, index) => {
          return (
            <div className="task" key={todo.id}>
              {editTarget === todo.id && (
                <>
                  <List>
                    <Input
                      type="text"
                      value={editInput}
                      onChange={onChangeUpdateText}
                    />
                  </List>
                  <ButtonA onClick={() => onClickUpdate(todo.id, index)}>
                    更新
                  </ButtonA>
                </>
              )}
              {editTarget === todo.id || (
                <>
                  <Div>
                    <FormG>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={todo.content}
                      />
                    </FormG>
                    <ButtonA>編集</ButtonA>
                  </Div>
                  <Button
                    className="btn"
                    onClick={() => onClickComplete(todo.id, index)}
                  >
                    完了
                  </Button>
                  <Button
                    className="btn"
                    onClick={() => onClickEdit(todo.id, index)}
                  >
                    編集
                  </Button>
                  <Button
                    className="btn"
                    onClick={() => onClickDelete(todo.id, index)}
                  >
                    削除
                  </Button>
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
