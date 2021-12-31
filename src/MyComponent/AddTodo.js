import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("empty");
        }
        else{
            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }

    return (
        <div className="container">
            <h3 className="my-3">
                Add New Todo
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </form>
        </div>
    )
}
