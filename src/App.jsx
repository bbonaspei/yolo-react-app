import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContainer from './components/LoginContainer/LoginContainer'
import Login from './pages/login'
import Home from './pages/home'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInName, setLoggedInName] = useState('');
    const [loggedInSurname, setLoggedInSurname] = useState('');

    const handleLoginSuccess = (name, surname) => {
        setIsLoggedIn(true);
        setLoggedInName(name);
        setLoggedInSurname(surname);
  };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess}></Login>}/>
                <Route path="/Home" element={<Home user={{name: loggedInName, surname: loggedInSurname}}></Home>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App