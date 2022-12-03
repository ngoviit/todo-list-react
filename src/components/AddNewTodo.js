import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function AddNewTodo({ createTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            id: uuidv4(),
            task: input,
            completed: false
        }
        createTodo(task)
        setInput('')
        task = {}
    }
    const [input, setInput] = useState('')
    return (
        <form onSubmit={handleSubmit}>
            <div className='AddNewTodo'>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" className='input-data'></input>
                <button className='btn-submit'>Add new Todo</button>
            </div>
        </form>
    )
}
export default AddNewTodo