import React from "react"
import css from "./Dialogs.module.css"
import Chat from "./Chat/Chat";
import MessageWindow from "./MessageWindow/MessageWindow";

const Dialogs = () => {
  return (
      <div className={css.content}>

        <div className={css.dialogs}>

          <Chat chatName='Maksim' chatId='1' />
          <Chat chatName='Artemka' chatId='2' />
          <Chat chatName='Ivan' chatId='3' />

        </div>

        <div className={css.messages}>

          <MessageWindow textMessage='Hi' />
          <MessageWindow textMessage='How are you?' />
          <MessageWindow textMessage='How do u do?' />
          <MessageWindow textMessage='Nice to meet you' />

        </div>
      </div>
  )
}

export default Dialogs