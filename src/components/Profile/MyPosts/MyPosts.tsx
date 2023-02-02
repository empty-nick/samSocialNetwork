import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts(){
  return (
      <div className={css.content}>
        My posts
        <div className={css.newPost}>New post</div>

        <Post message='My first post' />
        <Post message='Hi, how are you?' />
      </div>
  )
}

export default MyPosts