import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const todos = [
  {
    name: 'Sample',
    id: 123,
    finished: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos:todos
    }
  }

  handleFinished = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === id){
          return({
            ...item,
            finished: !item.finished
          })
        }
        return(item)
      })
    })
  }

  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      finished: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return(item.finished === false);
      })
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div className='header'>
          <h1>To-Do List</h1>
          <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <TodoList handleClear={this.handleClear} handleFinished={this.handleFinished} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
