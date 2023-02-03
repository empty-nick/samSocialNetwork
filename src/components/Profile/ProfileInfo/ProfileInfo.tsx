import React from "react";
import css from "./ProfileInfo.module.css"

function ProfileInfo() {
  return (
      <div>

        <div className={css.imageHandler}>
          <img src="https://blend.co.ke/wp-content/uploads/2021/09/1162016.jpeg" alt="Background"/>
        </div>

        <div className={css.avaDescription}>Ava & description</div>

      </div>
  )
}

export default ProfileInfo