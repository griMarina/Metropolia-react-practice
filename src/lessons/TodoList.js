import React from "react";

function TodoList(props) {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <div className="todo">
                        <li key={index}>{todo.description} {todo.date}</li>
                        <button onClick={() => { props.deleteTodo(index) }}>Delete</button>
                    </div>)
            })
            }
        </ul>
    )
}

export default TodoList;