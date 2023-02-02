import React from "react"
import css from "./Dialogs.module.css"

const Dialogs = () => {
  return (
      <div className={css.content}>
        <div className={css.dialogs}>

          <div className={css.dialog + ' ' + css.active}>
            Maksim
          </div>

          <div className={css.dialog}>
            Artemka
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