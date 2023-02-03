import React from "react"
import css from "./MessageWindow.module.css"

interface IMessage{
  textMessage: string
}
const MessageWindow = ({ textMessage } : IMessage) => {
  return (
          <div className={css.message}>
            {textMessage}
          </div>

  )
}

export default MessageWindow