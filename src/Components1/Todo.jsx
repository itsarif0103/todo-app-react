import { useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';



let count = 0;
const Todo = () => {

    const [todos , settodos] = useState([]);
    const inputRef = useRef(null);

    const add = () =>{
        settodos([...todos, {no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count", count)
    }
    useEffect(() =>{
        settodos(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("todos_count")
    }, [])

    useEffect(() =>{
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos))
        }, 100);
    }, [todos])
  return (
    <div className='todo'>
        <div className='todo-header'>TO-do list</div>
            <div className='todo-add'>
                <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' />
                <div onClick={() =>{add()}} className='todo-add-btn' >ADD</div>
            </div>
            <div className='todo-list'>
                {todos.map((item, index) =>{
                    return <TodoItems settodos = {settodos} key={index} no={item.no} display={item.display} text={item.text} />
                })}

            </div>
        </div>
  )
}

export default Todo
