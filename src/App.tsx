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
  const onChangeTodoText = (e: any) => setInputTodo(e.target.value);
  const [editTarget, setEditTarget] = useState<string>("");
  const [updateTodo, setUpdateTodo] = useState<string>("");
  const onChangeUpdateText = (e: any) => setUpdateTodo(e.target.value);
  const [updatedFlag, setUpdatedFlag] = useState(false);

  const onClickAdd = () => {
    const newTodos = [
      ...todoText,
      { id: nanoid(), content: inputTodo, completed: false },
    ];
    setTodoText(newTodos);
    setInputTodo("");
  };

  const onClickEdit = (id: string, index: number) => {
    setEditTarget(id);
  };

  const onClickDelete = (id: string, index: number) => {
    const newTodos = [...todoText];
    newTodos.splice(index, 1);
    setTodoText(newTodos);
  };

  const onClickUpdate = (id: string, index: number) => {
    const newTodos = [...todoText];
    const targetIndex = newTodos.findIndex((todo) => {
      return todo.id === id;
    });
    newTodos[targetIndex].content = updateTodo;
    setTodoText(newTodos);
    console.log(todoText);
    updatedFlag || setUpdatedFlag(true);
  };

  const onClickComplete = (id: string, index: number) => {
    const newTodos = [...todoText];
    newTodos.splice(index, 1);
    setTodoText(newTodos);
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
        onClickEdit={onClickEdit}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickUpdate={onClickUpdate}
        editTarget={editTarget}
        onChangeUpdateText={onChangeUpdateText}
        updateTodo={updateTodo}
        updatedFlag={updatedFlag}
      />
    </>
  );
}

export default App;
