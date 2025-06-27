import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContainer from './components/LoginContainer/LoginContainer'
import Login from './pages/login'
import Home from './pages/home'


function App() {
    const [loggedInUser, setLoggedInUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('loggedInUser');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Failed to load loggedInUser from localStorage:", error);
            return null;
        }
    });

    useEffect(() => {
        try {
            if (loggedInUser) {
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            } else {
                localStorage.removeItem('loggedInUser');
            }
        } catch (error) {
            console.error("Failed to save loggedInUser to localStorage:", error);
        }
    }, [loggedInUser]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login onLoginSuccess={setLoggedInUser}></Login>}/>
                <Route path="/Home" element={<Home user={loggedInUser}></Home>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
