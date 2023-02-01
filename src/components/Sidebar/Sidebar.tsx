import React from "react"
import css from "./Sidebar.module.css"

function Sidebar() {
  return (
      <nav className={css.sidebar}>
        <div className={css.item}><a href="/profile">Profile</a></div>
        <div className={`${css.item} ${css.active}`}><a href="/messages">Messages</a></div>
        <div className={css.item}><a href="/news">News</a></div>
        <div className={css.item}><a href="/music">Music</a></div>

        <div className={`${css.item} ${css.settings}`}><a href="/settings">Settings</a></div>
      </nav>
  )
}

export default Sidebar