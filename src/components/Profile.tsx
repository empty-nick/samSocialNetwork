import React from "react";

function Content(){
  return (
      <div className="main-content">
        <div className="bg-image"><img src="https://blend.co.ke/wp-content/uploads/2021/09/1162016.jpeg" alt="Background image"/></div>
        <div className="ava-description">Ava & description</div>
        <div className="posts">
          My post
          <div className="new-post">New post</div>
          <div className="posts">Post 1</div>
          <div className="posts">Post 2</div>
        </div>
      </div>
  )
}

export default Content