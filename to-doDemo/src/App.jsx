import { useState } from 'react';
import AddToDo from './AddToDo';
import ToDoCounter from './ToDoCounter';
import ToDoList from './ToDoList';
import './App.css';

function App() {
const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);
  return (
    <div>
      <AddToDo setTodos={setTodos}/>
      <ToDoCounter todos={todos}/>
      <br/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
