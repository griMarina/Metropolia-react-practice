import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';
// import ReactiveButton from 'reactive-button';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function Todo() {
    const [todo, setTodo] = useState({ description: '', date: '', status: '' });
    const [todos, setTodos] = useState([]);
    const [columnDefs] = useState([
        { field: 'description', sortable: true, rowDrag: true },
        { field: 'date', sortable: true },
        { field: 'status', sortable: true }
    ])

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: '', date: '', status: '' });
    }
    return (
        <div className="App" >
            <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
            <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
            <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            {/* <ReactiveButton
                idleText="Add"
                onClick={addTodo}
            /> */}
            <div className="ag-theme-material" style={{ height: 600, width: 600, margin: 'auto' }}>
                <AgGridReact
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowDragManaged={false}
                    animateRows={true}>
                </AgGridReact>
            </div>

        </div >
    );
}

export default Todo;