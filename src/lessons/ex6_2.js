import React, { useState } from 'react';
import './App.css';

function ex6_2() {
    const [question, setQuestion] = useState('');

    const entities = {
        '&#039;': "'",
        '&quot;': '"',
    };

    const showNewQuestion = () => {
        fetch(`https://opentdb.com/api.php?amount=1`)
            .then(response => response.json())
            .then(data => setQuestion(data.results[0].question.replace(/&#?\w+;/g, match => entities[match])))
            .catch(e => console.log(e));
    }

    return (
        <div className="App">
            <p>{question}</p>
            <button onClick={showNewQuestion}>New question</button>
        </div>
    );
}

export default ex6_2;