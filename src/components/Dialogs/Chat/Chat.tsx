import React from "react"
import css from "./Chat.module.css"
import {NavLink} from "react-router-dom";

interface IMessage {
  chatName: string;
  chatId: number | string;
}

const Chat = ({ chatName, chatId } : IMessage) => {
  return (
    <div className={css.dialog}>
      <NavLink to={`/messages/${chatId}`} className={state => state.isActive ? css.active : css.inactive}>{chatName}</NavLink>
    </div>
  )
}

export default Chat