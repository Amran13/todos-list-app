import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Todo.css';

const Todo = ({todo, deleteBtn}) => {
    return (
        <div className='todo'>
            <h5> {todo.task} </h5>
            <FontAwesomeIcon onClick={() => deleteBtn(todo)} icon={faTrash}/>
        </div>
    );
};

export default Todo;