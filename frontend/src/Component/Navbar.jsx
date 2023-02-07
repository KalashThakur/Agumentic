import React from 'react'
import style from "../Styles/Navbar.module.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  // let cartData = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div className={style.navbar}>
      <div className={style.heading}>dribble</div>
      <div className={style.navContainer}>
        <div>
        <Link to={'/'}>HomePage</Link> </div>
        <div> <Link to={'/admin'}>Admin </Link> </div>

        {/* <button className={style.btn1}> <Link to={'/'}>Sign in</Link> </button>
        <button className={style.btn2}> <Link to={'/admin'}>Sign up </Link> </button> */}
      </div>

      {/* <div className={style.navContainer}>
      <Link to={'/'}>HomePage</Link>
        <Link to={'/admin'}>Admin </Link>
      </div> */}
    </div>
  )
}
