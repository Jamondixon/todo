import React, { Component } from 'react'

const initialState = {
    title: "",
    content: ""
}

export default class TodoForm extends Component {

    state= initialState

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState(initialState)
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit} className="todo-form">
                <h2>New Todo Form</h2>
                <label>Title</label>
                <input type="text" 
                value={this.state.title} 
                onChange={this.handleChange} 
                name="title"/>
                <label>Content</label>
                <input 
                type="text" 
                value={this.state.content} 
                onChange={this.handleChange} 
                name="content"/>
                <input type="submit" name="Create Todo" />
            </form>
        )
    }
}
