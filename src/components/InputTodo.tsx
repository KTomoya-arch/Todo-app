import React, { FC, useState } from "react";

const InputTodo = (props: any) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="タスクを入力する"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
    </>
  );
};

export default InputTodo;
