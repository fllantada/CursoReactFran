import { useContext } from "react"
import LoginForm from "../LoginForm/LoginForm"

import { AuthContext } from "../../context/AuthContext"

const Login = () => {
    const { login } = useContext(AuthContext)

    return (
        <main>
            <h1>Login</h1>
            <LoginForm onLogin={(formData) => login(formData)}/>
        </main>
    )
}

export default Login