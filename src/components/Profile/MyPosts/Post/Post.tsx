import React from "react";
import css from "./Post.module.css"

function Post(){
  return (
        <div className={css.post}>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User avatar"/>
          <p className={css.text}>Some text</p>
        </div>
  )
}

export default Post