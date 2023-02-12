import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

  const postsData = [
    {id: 1, postMessage: 'My first post', likesCount: 12},
    {id: 2, postMessage: 'Hi, how are you?', likesCount: 11}
  ]

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

        <Post message={postsData[0].postMessage} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].postMessage} likesCount={postsData[1].likesCount} />
      </div>
  )
}

export default MyPosts