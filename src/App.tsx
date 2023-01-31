import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoArea from "./components/TodoArea";

function App() {
  const [text, setText] = useState("");

  const onClickAdd = () => {
    setText("aiueo");
  };

  return (
    <>
      <h1>やることリスト</h1>
      <InputTodo />
      <TodoArea />
    </>
  );
}

export default App;
