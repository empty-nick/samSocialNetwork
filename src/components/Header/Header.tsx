import React from "react";
import css from "./Header.module.css"

function Header(){
  return (
      <header className={css.header}>
        <img src="https://i.yapx.ru/VcLVV.png" alt="Apple"/>
      </header>
  )
}

export default Header