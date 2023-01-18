import React, { useState } from "react";
import './App.css';


function Calc() {
    const [data, setData] = useState({ number1: '', number2: '', result: '' });

    const inputChanged = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const addition = () => {
        const sum = (Number(data.number1) + Number(data.number2)).toFixed(1)
        setData({ number1: '', number2: '', result: sum });
    }

    const subtraction = () => {
        const sub = (Number(data.number1) - Number(data.number2)).toFixed(1)
        setData({ number1: '', number2: '', result: sub });
    }


    return (
        <div className="App">
            <p>Result = {data.result}</p>
            <input type="text" name="number1" onChange={inputChanged} value={data.number1} />
            <input type="text" name="number2" onChange={inputChanged} value={data.number2} />
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
        </div>
    )
}

export default Calc;