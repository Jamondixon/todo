import React from 'react'
import TodoCard from './TodoCard'

export default function TodoContainer(props) {

    const showTodos = () => {
        return props.todos.map(todo => <TodoCard removeTodo={props.removeTodo} todo={todo}/>)
    }
    return (
        <ul className="todo-container">
            {showTodos()}
        </ul>
    )
}

