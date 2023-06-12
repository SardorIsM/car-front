import React, { useState } from 'react'
import c from './RegisterComponent.module.css'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();


        fetch("http://localhost:3030/auth/register", {
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
            .then(data => data.msg && history('/login'))
            .catch((err) => {
                console.log(err.message)
            })

    }




    const history = useNavigate()

    return (
        <div className={c.register_container}>
            <div className={c.register_wrapper}>
                <p className={c.register_name}>Registration</p>
                <form onSubmit={createUser}>
                    <input type="text" placeholder=" Username... " required className={c.input_block} onChange={e => { setUsername(e.target.value) }} />
                    <input type="password" placeholder=" Password... " required className={c.input_block} onChange={e => { setPassword(e.target.value) }} />
                    <button type='submit' className={c.btn}>Sign up</button>
                    <button className={c.btn} onClick={() => { history('/login') }}>I have an account</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterComponent