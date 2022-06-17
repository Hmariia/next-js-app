import { server } from '../config'
import dataStyles from '../styles/Userdata.module.css'
import Image from 'next/image'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import Summary from '../components/Summary'
import Interests from '../components/Interests'
import Experience from '../components/Experience'
import Education from '../components/Education'
import React, { useState, useEffect } from 'react'

function User({ user }) {
    return (
        <div className={dataStyles.container}>
            <div className={dataStyles.head}>
                <Image className={dataStyles.img} src='/human3.jpg' alt="Picture of the author" width={200} height={200}/>
                <div className={dataStyles.textbox}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className={dataStyles.navbar}>
                <ul>
                    <li>
                        <a onClick={() => {setClicked(true)}}>Experience</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                    <li>
                        <a>Education</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                    <li>
                        <a>Contact</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                    <li>
                        <a>Summary</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                    <li>
                        <a>Interests</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                    <li>
                        <a>Skills</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className={dataStyles.body}>
                    <h3>Contact</h3>
                    <Contact user={user} />
                    <h3>Experience</h3>
                    <Experience user={user}/>
                    <h3>Education</h3>
                    <Education user={user} />
                    <h3>Interests</h3>
                    <Interests user={user} />
                    <h3>Skills</h3>
                    <Skills user={user} />
                    <h3>Summary</h3>
                    <Summary user={user} />
            </div>
        </div>
    )
}
  
export async function getStaticPaths() {
    const res = await fetch(`${server}/api/users`)
    const users = await res.json()
    const paths = users.map((user) => ({
        params: { id: user.id },
    }))

    return { paths, fallback: false }
}
    
export async function getStaticProps({ params }) {
    const res = await fetch(`${server}/api/users/${params.id}`)
    const user = await res.json()
      
    return { props: { user } }
}
  
export default User
