import React from "react";
import css from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
  return (
      <div className={css.content}>
        <ProfileInfo/>
        <MyPosts/>
      </div>
  )
}

export default Profile