import React, { useState } from 'react';
import './App.css';

function Form() {
    const [person, setPerson] = useState({ firstname: '', lastname: '', email: '', phone: '' });

    const inputChanged = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    }

    const formSubmitted = (event) => {
        event.preventDefault();
        const isTrue = Object.values(person).every(value => value !== '');

        if (isTrue) {
            alert(`Welcome ${person.firstname} ${person.lastname}`);
        } else {
            alert('All fields are required');
        }
    }

    return (
        <div className="App">
            <form onSubmit={formSubmitted}>
                <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
                <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged} />
                <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
                <input placeholder="Phone" name="phone" value={person.phone} onChange={inputChanged} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;