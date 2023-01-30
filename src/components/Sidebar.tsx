import React from "react";
import classes from "./Sidebar.module.css"

function Sidebar(){
  return (
      <nav className={classes.sidebar}>
        <div className={classes.item}><a href="">Profile</a></div>
        <div className={`${classes.item} ${classes.active}`}><a href="">Messages</a></div>
        <div className={classes.item}><a href="">News</a></div>
        <div className={classes.item}><a href="">Music</a></div>

        <div className={classes.settings}><a href="">Settings</a></div>
      </nav>
  )
}

export default Sidebar