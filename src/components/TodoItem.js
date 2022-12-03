import React, { useState } from 'react';
import styles from '../assets/css/todo.module.scss'
import PropTypes from 'prop-types';
function TodoItem({ todo, updateTodoList, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)
    const toggleForm = function () {
        setIsEditing(!isEditing)
    }
    const handleInput = function (e) {
        setTask(e.target.value)
    }
    const handelDelete = function (e) {
        e.preventDefault();
        onDelete(todo.id)
    }
    const handleUpdateTodoList = function (e) {
        e.preventDefault();
        updateTodoList({ id: todo.id, task: task })
        toggleForm()
    }
    let result
    if (isEditing) {
        result =
            <form onSubmit={handleUpdateTodoList}>
                <input onChange={handleInput} type="text" value={task}></input>
                <button>Save</button>
            </form>
    }
    else {
        result = <div class={styles.todoItem}>
            <i class="fa-solid fa-house-user"></i>
            <div>{task}</div>
            <div class='handleButton'>
                <button onClick={toggleForm}><i class="fa-solid fa-pen-to-square"></i>Edit</button>
                <button onClick={handelDelete}><i class="fa-solid fa-trash"></i>Delete</button>
            </div>
        </div>

    }
    return result
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
