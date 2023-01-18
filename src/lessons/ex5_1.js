import React, { useState } from "react";
import './App.css';


function CheckAge() {
    const [data, setData] = useState({ name: '', age: '' });

    const inputChanged = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const showAlert = () => {
        const message = (data.age >= 18)
            ? `Hello  ${data.name}`
            : (data.age < 18 && data.age > 0)
                ? 'You are too young'
                : 'The age should be a positive number';

        alert(message);
    }

    return (
        <div className="App">
            <input type="text" name="name" placeholder="Name" onChange={inputChanged} />
            <input type="text" name="age" placeholder="Age" onChange={inputChanged} />
            <button onClick={showAlert}>Check age</button>
        </div>
    )
}

export default CheckAge;