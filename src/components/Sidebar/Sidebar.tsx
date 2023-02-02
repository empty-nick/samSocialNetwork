import React from "react"
import css from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

function Sidebar() {
  return (
      <nav className={css.sidebar}>
        <div className={css.item}>
          <NavLink to="/profile" className={state => state.isActive ? css.active : css.notActive} >
            Profile
          </NavLink>
        </div>

        <div className={`${css.item} ${css.active}`}>
          <NavLink to="/messages" className={state => state.isActive ? css.active : css.notActive} >
            Messages
          </NavLink>
        </div>

        <div className={css.item}>
          <NavLink to="/news" className={state => state.isActive ? css.active : css.notActive} >
            News
          </NavLink>
        </div>

        <div className={css.item}>
          <NavLink to="/music" className={state => state.isActive ? css.active : css.notActive} >
            Music
          </NavLink>
        </div>

        <div className={`${css.item} ${css.settings}`}>
          <NavLink to="/settings" className={state => state.isActive ? css.active : css.notActive} >
            Settings
          </NavLink>
        </div>

      </nav>
  )
}

export default Sidebar