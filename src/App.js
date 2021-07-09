import { Component } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

const todosURL = "http://localhost:3000/todos/"

class App extends Component{

  state = {
    todos: [],
    currentId: 0
  }

  componentDidMount(){
    fetch(todosURL)
    .then(response => response.json())
    .then(todos => this.setState({
      todos,
      currentId: todos[todos.length - 1].id
    }))
    
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
      currentId: this.state.currentId + 1
    })

    fetch(todosURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: this.state.currentId + 1, ...newTodo})
    })
  }

  removeTodo = (todoToRemove) => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo !== todoToRemove
    })
    this.setState({
      todos: filteredTodos
    })
    fetch(todosURL + todoToRemove.id, {
      method: "DELETE"
    })
  }

  
  
  render() {
    return (
      <div className="App">
        <TodoForm addTodo={this.addTodo}/>
        <TodoContainer removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
