import React from "react";
import css from "./MyPosts.module.css"
import Post from "./Post/Post";
import {IPost} from "../../../interface";

function MyPosts({postsData}: {postsData : IPost[]}) {
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

        {postsData.map((post, index) => <Post message={post.postMessage} likesCount={post.likesCount} key={index}/>)}

      </div>
  )
}

export default MyPosts