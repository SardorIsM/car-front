import React from 'react'
import c from './AdminLeft.module.css'
import { HiHome } from 'react-icons/hi'
import { CiShop } from 'react-icons/ci'
import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AdminLeft = () => {
  return (
    <div className={c.container}>
      <Link to={'/'} className={c.home}>
        <HiHome className={c.home_icon}/>
        <p className={c.home_title}>Asosiy</p>
      </Link>
      <Link  className={c.home}>
        <CiShop className={c.home_icon}/>
        <p className={c.home_title}>E'lonlar</p>
      </Link>
      <Link  className={c.home}>
        <BsPencilSquare className={c.home_icon}/>
        <p className={c.home_title}>Savollar</p>
      </Link>
    </div>
  )
}

export default AdminLeft