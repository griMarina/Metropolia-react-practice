import React from 'react';
import './App.css';
import Home from '../components/Home';
import Todo from '../components/Todo';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App_router() {

    return (
        <BrowserRouter>
            <Link to="/">Home</Link>{' '}
            <Link to="/todo">Todo</Link>{' '}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
            </Routes>
        </BrowserRouter>);
}

export default App_router;