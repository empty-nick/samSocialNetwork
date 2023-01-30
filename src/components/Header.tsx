import React from "react";
import s from "./Header.module.css"

function Header(){
  return (
      <header className={s.header}>
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="Apple"/>
      </header>
  )
}

export default Header