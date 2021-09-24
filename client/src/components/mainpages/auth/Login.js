import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/action/ActionAuth';
import { Link } from "react-router-dom";
import './login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const loggin = (e) => {
        e.preventDefault()
        dispatch (login({email,password}))
    }
    return (
        <div className="login-page">
            <form >
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email"  onChange={(e) =>setEmail(e.target.value)}
                value={email} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" onChange={(e) =>setPassword(e.target.value)}
                value={password} />

                <div className="row">
                    <button onClick={loggin} type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
