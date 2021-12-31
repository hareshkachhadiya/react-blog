import React from 'react'

export default function SingleTodo({todo, onDelete}) {
    // let showClass = '';
    // let collespadClass = '';
    // if(todo.srno === 1){
    //     showClass = 'show';
    // }
    // if(todo.srno !== 1){
    //     collespadClass = 'collapsed';
    // }

    return (
        <>
        {/* <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${todo.srno}`}>
            <button className={`accordion-button ${collespadClass}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${todo.srno}`} aria-expanded="true" aria-controls={`collapse${todo.srno}`}>
                {todo.title}
            </button>
            </h2>
            <div id={`collapse${todo.srno}`} className={`accordion-collapse collapse ${showClass}`} aria-labelledby={`heading${todo.srno}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {todo.desc}
                    <button className="btn btn-sm btn-danger">Delete</button>
                </div>
            </div>
        </div> */}
        <li className="list-group-item">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </li>
        </>
    )
}
