import LoginForm from "../LoginForm/LoginForm"

const Login = () => {
    return (
        <main>
            <h1>Login</h1>
            <LoginForm onLogin={(formData) => console.log(formData)}/>
        </main>
    )
}

export default Login