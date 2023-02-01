import React, {useState} from 'react';

import './App.css';
import InputTodo from './components/InputTodo';
import TodoArea from './components/TodoArea';

function App() {
  const [todoText, setTodoText] = useState('');
  
  const onChangeTodoText = (e: any) => setTodoText(e.target.value);

  const onClickAdd = () => {
    setTodoText("aiueo");
  };

  return (
    <>
      <h1>やることリスト</h1>
      <InputTodo onChangeTodoText={onChangeTodoText} todoText={todoText} onClickAdd={onClickAdd} />
      <TodoArea />
    </>
  );
}

export default App;
