import React from "react"
import css from "./Dialogs.module.css"
import Chat from "./Chat/Chat";
import MessageWindow from "./MessageWindow/MessageWindow";
import {IDialogData, IMessageData} from "../../interface";

interface IDialog{
  dialogsData: IDialogData[],
  messagesData: IMessageData[]
}

const Dialogs = ({dialogsData, messagesData} : IDialog) => {
  return (
      <div className={css.content}>
        <div className={css.dialogs}>
          {dialogsData.map( chat => <Chat chatName={chat.chatName} chatId={chat.chatId} key={chat.chatId}/>)}
        </div>

        <div className={css.messages}>
          {messagesData.map( message => <MessageWindow textMessage={message.textMessage} key={message.id}/>)}
        </div>
      </div>
  )
}

export default Dialogs