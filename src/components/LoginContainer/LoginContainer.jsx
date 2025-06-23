import './LoginContainer.css'

function LoginContainer() {
    return (
    <div className="login-container">
        <h1>Login</h1>
        <form>
            <div className="input-group">
                <label>Username</label>
                <br></br>
                <input 
                    type="text"
                    placeholder="Enter your username">
                </input>
            </div>
            <div className="input-group">
                <label>Password</label>
                <br></br>
                <input
                    type="text"
                    placeholder="Enter your password">
                </input>
            </div>
            <button type="submit"><b>Login</b></button>
        </form>
    </div>
    )
}

export default LoginContainer;