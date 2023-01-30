import React from "react";
import classes from "./Profile.module.css"

function Profile(){
  return (
      <div className={classes.main}>
        <div className={classes.main}><img src="https://blend.co.ke/wp-content/uploads/2021/09/1162016.jpeg" alt="Background image"/></div>
        <div className={classes.avaDescription}>Ava & description</div>
        <div className="posts">
          My post
          <div className="newPost">New post</div>
          <div className={classes.post}>Post 1</div>
          <div className={classes.post}>Post 2</div>
        </div>
      </div>
  )
}

export default Profile