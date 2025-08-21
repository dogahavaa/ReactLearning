import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const CreateTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }

  const RemoveTodo = (todoId) => {
    const extractedArray = todos.filter((todo) => todo.id !== todoId);
    setTodos([...extractedArray])
  }

  const UpdateTodo = (newTodo) => {
    // Yapılacak
  }

  return (

    <div className='app-main'>
      <TodoCreate onTodoCreate={CreateTodo} />
      <TodoList todos={todos} onRemoveTodo={RemoveTodo} />
    </div>
  )
}

export default App
