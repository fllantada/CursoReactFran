import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"

import LoginForm from "../LoginForm/LoginForm"

const Login = () => {
    const [loading, setLoading] = useState(false)
    const { signin, signinWithGithub } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const handleLoginWithGithub = () => {
        setLoading(true)
        signinWithGithub(() => {
            navigate(from, { replace: true })
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    const handleLoginWithEmail = (formData) => {
        setLoading(true)
        signin(formData.email, formData.password, () => {
            navigate(from, { replace: true })
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
    
    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <main>
            <h1>Login</h1>
            <LoginForm onLogin={(formData) => handleLoginWithEmail(formData)}/>
            <button style={{ marginTop: 30}} onClick={handleLoginWithGithub}>Login with Github</button>
        </main>
    )
}

export default Login