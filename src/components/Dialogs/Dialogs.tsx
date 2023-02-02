import React from "react"
import css from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
      <div className={css.content}>
        <div className={css.dialogs}>

          <div className={css.dialog}>
            <NavLink to='/messages/1' className={state => state.isActive ? css.active : css.inactive}>Maksim</NavLink>
          </div>

          <div className={css.dialog}>
            <NavLink to='/messages/2' className={state => state.isActive ? css.active : css.inactive}>Artemka</NavLink>
          </div>

          <div className={css.dialog}>
            <NavLink to='/messages/3' className={state => state.isActive ? css.active : css.inactive}>Vanya</NavLink>
          </div>

        </div>

        <div className={css.messages}>
          <div className={css.message}>Hi!</div>
          <div className={css.message}>How are you?</div>
          <div className={css.message}>Yo</div>
        </div>
      </div>
  )
}

export default Dialogs