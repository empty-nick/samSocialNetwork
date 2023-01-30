import React, {useState} from "react";
import css from "./Post.module.css"

function Post({message}: { message: string }){
  const [like, setLike] = useState(0)

  function likeCounter(){
    setLike(like + 1)
  }

  return (
        <div className={css.post}>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="User avatar"/>
          <p className={css.text}>{message}</p>
          <span className={css.likes}>{like}</span>
          <button className={css.likeBtn} onClick={() => likeCounter()}>like</button>
        </div>
  )
}

export default Post