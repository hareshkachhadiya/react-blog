import React from 'react'
import SingleTodo from '../MyComponent/SingleTodo';

export default function TodoList(props) {
    return (
        <div className="container">
            <h3 className=" pt-3">
                My Todo List
            </h3>
            {
                props.todos.length === 0 ? " No Todo found" :  
                <div className="accordion" id="accordionExample">
                    <ul className="list-group">
                        {props.todos.map((todo) => {
                            return <SingleTodo todo={todo} key={todo.srno} onDelete={props.onDelete}/>
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
