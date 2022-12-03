import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem'
import AddNewTodo from './AddNewTodo'
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';
function Todo() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "taks1", completed: false },
    { id: uuidv4(), task: "task2", completed: true },
  ])
  const updateTodoList = function(data){
    const updateTodo = todos.map((todo)=>{
        if(todo.id === data.id){
console.log(data.task);
           return {...todo, task: data.task}
        }
        return todo
    })
    setTodos(updateTodo)
  }
  const onDelete = function(id){
    console.log(id);
    const updateTodo = todos.filter((todo)=> todo.id !== id)
    setTodos(updateTodo)
  }
  const todosList = todos.map(function (todo) {
    return (
      <Fragment>
        <TodoItem
          updateTodoList={updateTodoList}
          onDelete={onDelete}
          key={todo.id}
          todo={todo}
        />
      </Fragment>

    )
  })
  const createTodo = function (value) {
    console.log(value);
    setTodos([...todos, value])
    console.log(todos);
  }
  return (
    <div className='listItem'>
      {todosList}
      <AddNewTodo createTodo={createTodo} />
    </div>
  )
}
export default Todo
