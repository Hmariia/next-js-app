import loginStyles from '../styles/Login.module.css'
import { server } from '../config'
import React, { useState } from 'react'
import {useRouter} from 'next/router'

const login = ({ users }) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const router = useRouter()

    const onSubmit = (e) => {
        e.preventDefault()
        users.forEach(user => {
            if (user.username == username){
                if (user.password == password) {
                    router.push(user.id)
                }
            }
        })
    }

  return (
    <div className={loginStyles.body}>
        <div className={loginStyles.leftbox}>
            <form onSubmit={onSubmit}>
                <label className={loginStyles.label} >User name</label> <br />
                <input className={loginStyles.text} type="text" id="uname" name="username"
                 placeholder="User name" onChange={(e) => setUsername(e.target.value)} /> <br />
                <label className={loginStyles.label}>Password</label> <br />
                <input className={loginStyles.text} type="password" id="password" 
                name="password" placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}/> <br />
                <input className={loginStyles.button} type="submit" value="log in" 
                /> <br />
            </form>
        </div>
        <div className={loginStyles.rightbox}></div>
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/users`)
    const users = await res.json()
      
    return { props: { users } }
}

export default login