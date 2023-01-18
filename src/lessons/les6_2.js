import React, { useState, useEffect } from "react";
import './App.css';

function UserList() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(responseData => setUsers(responseData.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="App">
            {users.map((user, inx) => {
                return <p key={inx}>{user.first_name} {user.last_name} {user.email}</p>
            })}
        </div>
    );
}

export default UserList;