import './LoginContainer.css'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContainer = ({onLoginSuccess}) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (username === 'testuser' && password === 'password123') {
            onLoginSuccess(name, surname);
            
            navigate('/Home')

            setName('');
            setSurname('');
            setUsername('');
            setPassword('');
        
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
    <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div className='input-group'>
                <label>Name</label>
                <br></br>
                <input 
                type='text'
                id='name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your name'></input>
            </div>
            <div className='input-group'>
                <label>Surname</label>
                <br></br>
                <input 
                type='text'
                id='surname'
                value={surname}
                required
                onChange={(e) => setSurname(e.target.value)}
                placeholder='Enter your surname'></input>
            </div>
            <div className="input-group">
                <label>Username</label>
                <br></br>
                <input 
                    type="text"
                    id='username'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username">
                </input>
            </div>
            <div className="input-group">
                <label>Password</label>
                <br></br>
                <input
                    type="password"
                    id='password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password">
                </input>
            </div>
            {error && (
                <div className='error-msg'>{error}</div>)}
            <button type="submit"><b>Login</b></button>
        </form>
    </div>
    )
}

export default LoginContainer;