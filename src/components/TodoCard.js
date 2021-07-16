import React from 'react'

export default function TodoCard(props) {

    const handleClick = (event) => {
        props.removeTodo(props.todo)
    }
    return (
        <li className="todo-card">
            <p className="title">{props.todo.title}</p>
            <p lassName="content">{props.todo.content}</p>
            <button  onClick={handleClick} className="delete">Delete</button>
        </li>
    )
}
