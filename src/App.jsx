import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContainer from './components/LoginContainer/LoginContainer'
import Login from './pages/login'
import Home from './pages/home'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}/>
                <Route path="/Home" element={<Home></Home>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
