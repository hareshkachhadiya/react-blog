//import logo from './logo.svg';
import Header from './MyComponent/Header';
import TodoList from './MyComponent/TodoList';
import {AddTodo} from './MyComponent/AddTodo';
import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router, Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = '';
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log("dddd", todo);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let srno1 = '';
    if(todos.length === 0){
      srno1 = 0;
    }
    else{
      srno1 = todos[todos.length-1].srno + 1;
    }
    const myTodo = {
      srno:srno1,
      title: title,
      desc:desc
    }

    setTodos([...todos, myTodo]);
    
    this.props.navigation.navigate('/');
  }

  const searchTodo = (todoKeyword) => {
    if(todoKeyword !== ''){
      console.log("if"+todoKeyword);
      todos.filter((e) => {
        return e.title.search(todoKeyword) !== -1;
      });
    }
    else{
      console.log("else");
      setTodos(todos);
    }
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="App1">
        <Header title1="MY React JS APP" searchBar={false} searchTodo={searchTodo}/>
        <Switch>
            <Route exact path="/" render={() => {
              return (
                <>
                <TodoList todos={todos} onDelete={onDelete}/>        
                </>
              )
            }}>
            </Route>
            <Route path="/newTodo">
              <AddTodo addTodo={addTodo}/>
            </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
