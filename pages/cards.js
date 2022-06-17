import { server } from '../config'
import CardList from '../components/CardList'
import React, { useState, useEffect } from 'react'

const cards = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`${server}/api/users`)
    const data = await res.json()

    return data
  }

  useEffect (() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

  const deleteUser = async (id) => {
    const res = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    console.log(data)
    setUsers(data)
  }

  return (
    <div>
      <title>Users</title>
      <CardList onDelete={deleteUser} users={users} />
    </div>
  )
}

/*export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/users`)
  const users = await res.json()

  return { props: { users } }
}*/

export default cards