import React from "react";
import css from "./Sidebar.module.css"

function Sidebar(){
  return (
      <nav className={css.sidebar}>
        <div className={css.item}><a href="src/components">Profile</a></div>
        <div className={`${css.item} ${css.active}`}><a href="src/components">Messages</a></div>
        <div className={css.item}><a href="src/components">News</a></div>
        <div className={css.item}><a href="src/components">Music</a></div>

        <div className={`${css.item} ${css.settings}`}><a href="src/components">Settings</a></div>
      </nav>
  )
}

export default Sidebar