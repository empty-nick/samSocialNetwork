import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts(){
  return (
      <div className={css.content}>
        My posts
        <div className={css.newPost}>New post</div>

        <Post />
        <Post />
        <Post />
      </div>
  )
}

export default MyPosts