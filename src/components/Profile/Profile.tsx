import React from "react";
import css from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

function Profile(){
  return (
      <div className={css.main}>
        <div className={css.image}><img src="https://blend.co.ke/wp-content/uploads/2021/09/1162016.jpeg" alt="Background image"/></div>
        
        <div className={css.avaDescription}>Ava & description</div>

        <MyPosts />
      </div>
  )
}

export default Profile