import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import { faListCheck} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [input, setInput] = useState('')


let initTodo;
if(localStorage.getItem('todos-list') ===  null){
  initTodo = [
    {id: 1, task : 'bazar theke tomato ante hobe'},
    {id: 2, task : 'current er bil dite hobe'}
  ]
}
else{
  initTodo = JSON.parse(localStorage.getItem('todos-list')) 
}

const [todos, setTodos] = useState(initTodo)
useEffect(() => {
  localStorage.setItem('todos-list', JSON.stringify(todos))
}, [todos])



const getTodo = (event) => {
  if(event.key === 'Enter'){
    if(input === ''){
      alert('Write Something')
    }
    else{
        const newTodo = {
          id: (todos.length + 1), task : input
        }
        setTodos([...todos, newTodo])
        setInput('');
        
    }
  }
}
const deleteBtn = (item) => {
  const rest = todos.filter(todo => item!==todo);
  setTodos(rest);
}




  return (
    <div className="App">
      <h2>Todos List  <FontAwesomeIcon icon={faListCheck}/> </h2>
      <input className='input'
       onChange={(e) => setInput(e.target.value)}
       value={input}
       onKeyPress={getTodo}
       type="text" 
       placeholder='Enter your task..' />
      {
        todos.map(todo => <Todo key={todo.id} deleteBtn={deleteBtn} todo={todo}></Todo>)
      }
      {
        todos.length === 0 && <h5>Plese add some Task</h5>
      }
    </div>
  );
}

export default App;
