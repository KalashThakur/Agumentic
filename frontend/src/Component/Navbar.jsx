import React from 'react'
import style from "../Styles/Navbar.module.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  // let cartData = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className={style.navbar}>
      <div className={style.heading}>dribble</div>
      <div className={style.navContainer}>
        <Link to={'/'}>HomePage</Link>
        <Link to={'/admin'}>Admin </Link>
      </div>
    </div>
  )
}
