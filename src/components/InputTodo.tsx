import React, { FC, useState } from "react";

const InputTodo = (props: any) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="追加したいタスクを入力する"
          value={todoText}
          onChange={onChange}
        />
        <button onClick={onClick}>追加</button>
      </div>
    </>
  );
};

export default InputTodo;
