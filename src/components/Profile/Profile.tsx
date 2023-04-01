import React from "react";
import css from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {IPost} from "../../interface";

function Profile({postsData} : {postsData: IPost[]}) {
  return (
      <div className={css.content}>
        <ProfileInfo/>
        <MyPosts postsData={postsData} />
      </div>
  )
}

export default Profile