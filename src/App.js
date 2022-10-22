import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    {id : 1, task : 'shopping'},
    {id : 2, task : 'walking'},
    {id : 3, task : 'drinking'}
])

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
      <h2>Todos List App</h2>
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
        todos.length === 0 && <h5>No todos left</h5>
      }
    </div>
  );
}

export default App;
