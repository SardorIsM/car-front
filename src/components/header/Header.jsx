import React, { useState, useEffect } from 'react'
import c from './Header.module.css'
import { RxPerson } from 'react-icons/rx'
import { MdOutlineCancel } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Header = () => {

  const [loginVisible, setLoginVisible] = useState({ display: "block" })
  const [exitVisible, setExit] = useState({ display: "none" })

  useEffect(() => {
    localStorage.getItem("token") && setLoginVisible({ display: "none" })
    localStorage.getItem("token") && setExit({ display: "block" })
  }, [])

  const exit = () => {
    localStorage.removeItem("token")
  }


  return (
    <div className={c.header}>
      <div className={c.a_wrapper}>
        <RxPerson style={loginVisible} className={c.icon} />
        <MdOutlineCancel style={exitVisible} className={c.icon_extra} onClick={exit}/>
        <Link to="/login" style={loginVisible} className={c.a}>Tizimga kirish</Link>
        <Link to="/login" style={exitVisible} className={c.a_extra} onClick={exit}>Tizimdan chiqish</Link>
      </div>
    </div>
  )
}

export default Header