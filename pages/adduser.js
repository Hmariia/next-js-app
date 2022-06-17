import styles from '../styles/Adduser.module.css'
import React, { useState, useEffect } from 'react'
import Contact from '../components/Contact'

const adduser = () => {
  const [user, setUser] = useState({name: 'Full name', username: 'username', 
  email: 'email', phone: 'phone', website: 'website', address : {street: 'street', 
  suite: 'suite', city: 'city', country: 'country', zipcode: 'zipcode'}})
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (!username)
    {
        alert('Please add user details')
        return
    }
    onAdd({username, email, name, reminder})
    {
      setUser({})
    }
  }
  
  return (
    <div className={styles.container}>
        <Contact user={user} />    
        <button onSubmit={onSubmit} className={styles.button}>SUBMIT</button> 
    </div>
  )
}

export default adduser