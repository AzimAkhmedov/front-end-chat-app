// import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/img/Logo.svg'
import s from './styles.module.scss'
const Logo = () => {
  return (
    <div className={s.logo}>
      {/* <NavLink to={'/'}> */}
        <img src={img} alt="" />
         <div><span>Chat </span>App</div>
      {/* </NavLink> */}
    </div>
  )
}

export default Logo