import React, { useState } from "react";
import './App.css';
import TodoList from "./TodoList";

function AppTodo() {
    const [todo, setTodo] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        });
    }

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: '', date: '' });
    }

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, row) => row !== index));
    }

    return (
        <div className="AppTodo">
            <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
            <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} deleteTodo={deleteTodo} />

        </div>
    );
}

export default AppTodo;