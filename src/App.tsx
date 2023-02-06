import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./types/todo";
import "./App.css";
import InputItem from "./components/InputItem";
import TodoArea from "./components/TodoArea";

function App() {
  const [todoText, setTodoText] = useState<Todo[]>([]);
  const [inputTodo, setInputTodo] = useState<string>("");
  const onChangeTodoText = (e: any) => setInputTodo(e.target.value);
  const [editTarget, setEditTarget] = useState<string>("");
  const onChangeUpdateText = (e: any) => setEditInput(e.target.value);
  const [editInput, setEditInput] = useState<any>("");

  const onClickAdd = () => {
    if (!inputTodo || "") {
      return;
    }
    const newTodos = [
      ...todoText,
      { id: nanoid(), content: inputTodo, completed: false },
    ];
    setTodoText(newTodos);
    setInputTodo("");
  };

  const onClickEdit = (id: string, index: number) => {
    setEditTarget(id);
    const newEdit = todoText.find((todo) => todo.id === id);
    setEditInput(newEdit?.content);
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
    newTodos[targetIndex].content = editInput;
    setTodoText(newTodos);
    setEditTarget("");
  };

  const onClickComplete = (id: string, index: number) => {
    const newTodos = [...todoText];
    newTodos.splice(index, 1);
    setTodoText(newTodos);
  };

  return (
    <>
      <h1>ToDo List</h1>
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
        editInput={editInput}
      />
    </>
  );
}

export default App;
