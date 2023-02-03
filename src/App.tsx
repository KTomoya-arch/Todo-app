import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./types/todo";
import "./App.css";
import InputItem from "./components/InputItem";
import TodoArea from "./components/TodoArea";

function App() {
  const [todoText, setTodoText] = useState<Todo[]>([
    { id: nanoid(), content: "テスト", completed: false },
    { id: nanoid(), content: "テスト2", completed: false },
  ]);
  const [inputTodo, setInputTodo] = useState<string>("");
  const [editFlag, setEditFlag] = useState(false);

  const onChangeTodoText = (e: any) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const newTodos = [
      ...todoText,
      { id: nanoid(), content: inputTodo, completed: false },
    ];
    setTodoText(newTodos);
  };

  const onClickEdit = (index: any) => {
    setEditFlag(true);
  };

  const onClickDelete = (index: any) => {
    // const newTodos = [...incompleteTodos];
    // newTodos.splice(index, 1);
    // setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: any) => {
    // const newIncompleteTodos = [...incompleteTodos];
    // newIncompleteTodos.splice(index, 1);
    // setIncompleteTodos(newIncompleteTodos);
    // const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index: any) => {
    // const newCompleteTodos = [...completeTodos];
    // newCompleteTodos.splice(index, 1);
    // setCompleteTodos(newCompleteTodos);
    // const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <h1>やることリスト</h1>
      <InputItem
        inputTodo={inputTodo}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <TodoArea
        todoText={todoText}
        onClickComplete={onClickComplete}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </>
  );
}

export default App;
