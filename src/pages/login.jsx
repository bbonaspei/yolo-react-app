import LoginContainer from '../components/LoginContainer/LoginContainer.jsx'

const Login = ({onLoginSuccess}) => {
    return (
        <LoginContainer onLoginSuccess={onLoginSuccess}></LoginContainer>
    )
}

export default Login
