import './LoginContainer.css'
import React, {useState, useEffect} from 'react';


const LoginContainer = () => {
    const DEFAULT_USER = {
        username: 'testuser',
        password: 'password123',
        name: 'Default',
        surname: 'User',
    }

    const [currentUser, setCurrentUser] = useState(null);

    const [registeredUsers, setRegisteredUsers] = useState(() => {
        try {
            const storedUsers = localStorage.getItem('registeredUsers');
            let initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

            if (!initialUsers.some(user => user.username === DEFAULT_USER.username)) {
                initialUsers.push(DEFAULT_USER);
            } else {
                initialUsers = initialUsers.map(user => user.username === DEFAULT_USER.username ? { ...DEFAULT_USER } : user);
            }
            return initialUsers;
        } catch (error) {
            console.error("Failed to load:", error);
            return [DEFAULT_USER];
        }
    });

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    useEffect(() => {
        try {
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        } catch (error) {
            console.error("Failed to save user to localStorage", error);
            setError("Failed to save data. Please check browser storage settings.");
        }
    }, [registeredUsers]);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        const foundUser = registeredUsers.find(
            user => user.username === username && user.password === password
        );

        if (foundUser) {
            setCurrentUser({
                username: foundUser.username,
                name: name,
                surname: surname
            });

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