import React from "react";
import css from "./Header.module.css"

function Header(){
  return (
      <header className={css.header}>
        <img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-1977.png" alt="Apple"/>
      </header>
  )
}

export default Header