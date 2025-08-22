import React, { useState } from 'react'
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [editContent, setEditContent] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const EditTodo = () => {
        setEditable(false);
        const newTodo = {
            id: id,
            content: editContent
        }
        onUpdateTodo(newTodo);
    }

    return (
        <div className='todo-main'>
            <div>
                {
                    editable
                        ? <input
                            className='todo-create-input'
                            type='text'
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                        >
                        </input>
                        : content
                }
            </div>
            <div className='todo-icons'>
                <MdOutlineRemoveCircleOutline
                    onClick={removeTodo}
                    className='todo-icons-item item-delete' />
                {
                    editable
                        ? <FaCheck className='todo-icons-item item-check'
                            onClick={EditTodo}
                        />
                        : <MdOutlineModeEdit className='todo-icons-item item-edit'
                            onClick={() => setEditable(true)}
                        />
                }

            </div>
        </div>
    )
}

export default Todo