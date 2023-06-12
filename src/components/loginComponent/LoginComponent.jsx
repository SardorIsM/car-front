import React, { useState } from 'react'
import c from './LoginComponent.module.css'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate()
    const createUser = async (e) => {
        e.preventDefault();


        fetch("http://localhost:3030/auth/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => data.token && localStorage.setItem("token", data.token)
            )
            .catch((err) => {
                console.log(err.message)
            })

        

    }

   




    return (
        <div>
            <div className={c.login_container}>
                <div className={c.login_wrapper}>
                    <p className={c.login_name}>Login</p>
                    <form onSubmit={createUser}>
                        <input type="text" placeholder=" Username... " required className={c.input_block} onChange={e => { setUsername(e.target.value) }} />
                        <input type="password" placeholder=" Password... " required className={c.input_block} onChange={e => { setPassword(e.target.value) }} />
                        <button type='submit' className={c.btn}>Sign in</button>
                        <button className={c.btn} onClick={() => { history('/register') }}>I don't have an account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent