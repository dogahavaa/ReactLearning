import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onTodoCreate }) {

    const [message, setMessage] = useState('');

    const CreateTodo = () => {
        if (!message) return;
        const requirement = {
            id: Math.floor(Math.random() * 9999999999),
            content: message
        }
        onTodoCreate(requirement)
        setMessage("");
        console.log(requirement)
    }

    return (
        <div className='todo-create-main'>
            <div className='todo-create-input-div'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='todo-create-input'
                    type='text'
                    placeholder='Todo Giriniz..'></input>
            </div>
            <div>
                <button onClick={CreateTodo} className='todo-create-button'>ToDo Oluştur</button>
            </div>
        </div>
    )
}

export default TodoCreate