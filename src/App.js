import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { todoItems: [] };

    // Handles adding a todo item
    this.addTodoItemsHandler = this.addTodoItemsHandler.bind(this);

    // Handles when a todo item is set to be complete or incomplete
    //this.todoItemStateHandler = this.todoItemStateHandler.bind(this);

    // Removes a todo item
    //this.removeTodoItemsHandler = this.removeTodoItemsHandler.bind(this);

    // Sets the state of the list
    //this.setListStateHandler = this.setListStateHandler.bind(this);

    // Clears all items that have been completed
    //this.clearCompletedHandler = this.clearCompletedHandler.bind(this);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adam's React Todo List</h1>
        </header>
        <h1>Todo List</h1>
        <div className="todo-list-wrapper">
          <TodoList addTodoItemsHandler={this.addTodoItemsHandler} items={[{name: 'item1'},{name: 'item2'},{name: 'item3'}]}/>
        </div>
      </div>
    );
  }

  addTodoItemsHandler(e){
    if(e.keyCode == 13){
      var itemName = e.target.value;
      console.log(itemName);
      var newItem = {name: itemName}
      this.state.todoItems.unshift(newItem);
      this.setState({
        todoItems: this.state.todoItems
      });
    }
    
  }

  removeTodoItemsHandler(name){

  }
}


function TodoList(props){
  var itemList = props.items.map(function(todoItem){
    return (<TodoItem item={todoItem} addTodoItemsHandler={props.addTodoItemsHandler}/>);
    
  })
  return (
    <div>
      <input className="new-todo" placeholder="What needs to be done?" onKeyDown={props.addTodoItemsHandler} />
      <ul>
        { itemList }
      </ul>
    </div>
  );
}

function TodoItem(props){
  return (
    <li>
      <div><input type="checkbox" /></div>
      <div>{props.item.name}</div>
      <div>x</div>
   </li>
  )
}



export default App;
