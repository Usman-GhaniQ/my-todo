import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from "react";

function App() {
   
  const userInput = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    console.log(userInput.current.value);
    todo.push(userInput.current.value);
    setTodo([...todo])
    console.log(todo);
    userInput.current.value = ''
  }

  const deleteTodo = (index) => {
    console.log('todo deleted', index);
    todo.splice(index , 1);
    setTodo([...todo])
  }

  const editTodo = (index)=>{
    const updatedValue = prompt('enter updated value')
    if (updatedValue !== null && updatedValue.trim() !== '') {
      const updatedTodos = [...todo]; 
      updatedTodos.splice(index, 1, updatedValue); 
      setTodo(updatedTodos); 
    }
  };




   return(
    <>
      <h1>Hello world!</h1>
      <input type="text" placeholder="enter todo" ref={userInput} />
      <button onClick={addTodo}>AddTodo</button>
      <ul>
        {todo?.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={()=>editTodo(index)}>Edit</button>
          </li>
        })}
      </ul>
    </>
  )

}
export default App;