import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {
  return (
      <div className={css.content}>
        <h3 className={css.text}>My posts</h3>
        <div className={css.newPost}>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>

        <Post message='My first post'/>
        <Post message='Hi, how are you?'/>
      </div>
  )
}

export default MyPosts