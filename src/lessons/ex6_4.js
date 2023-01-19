import React, { useState } from 'react';

function ex6_4() {

    const [data, setData] = useState([]);
    const [key, setKey] = useState('')

    const fetchData = () => {
        fetch('https://api.github.com/search/repositories?q=' + key.trim().toLowerCase())
            .then(response => response.json())
            .then(resData => {
                setData(resData.items);
            })
            .catch(e => console.log(e))
    }

    const inputChanged = (event) => {
        setKey((event.target.value));
    }

    return (
        <div className='App'>
            <h2>Repositories</h2>
            <input type="text" value={key} onChange={inputChanged} />
            <button onClick={fetchData}>Search</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, inx) => <tr key={inx}><td>{el.full_name}</td><td>{el.url}</td></tr>)}
                </tbody>

            </table>
        </div>
    );
}

export default ex6_4;