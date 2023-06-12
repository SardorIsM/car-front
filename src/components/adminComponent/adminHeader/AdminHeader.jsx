import React from 'react'
import c from './AdminHeader.module.css'
import { Link } from 'react-router-dom'
import { RxPerson } from 'react-icons/rx'

const AdminHeader = () => {
  return (
    <div className={c.container}>
      <Link to={'/'} className={c.link}>
        <RxPerson className={c.title}/>
        <p className={c.title}>Asosiyga qaytish</p>
      </Link>
      <div></div>
    </div>
  )
}

export default AdminHeader