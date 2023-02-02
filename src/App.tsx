import React, {useState} from 'react';

import './App.css';
import InputTodo from './components/InputTodo';
import TodoArea from './components/TodoArea';

function App() {
  const [todoText, setTodoText] = useState('');

  const [incompleteTodos, setIncompleteTodos] = useState(["朝7時に起きる", "歯を磨く"]);

  const onChangeTodoText = (e: any) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickEdit = (index: any) => {
    alert(index);
  }

  const onClickDelete = (index: any) => {
    const newTodos = [...incompleteTodos].splice(index+1);
    setIncompleteTodos(newTodos);
  }

  return (
    <>
      <h1>やることリスト</h1>
      <InputTodo onChangeTodoText={onChangeTodoText} todoText={todoText} onClickAdd={onClickAdd} />
      <TodoArea incompleteTodos={incompleteTodos} onClickEdit={onClickEdit} onClickDelete={onClickDelete}/>
    </>
  );
}

export default App;
