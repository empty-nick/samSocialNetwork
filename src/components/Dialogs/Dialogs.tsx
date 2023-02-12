import React from "react"
import css from "./Dialogs.module.css"
import Chat from "./Chat/Chat";
import MessageWindow from "./MessageWindow/MessageWindow";

const Dialogs = () => {

  const dialogsData = [
    {chatId: '1', chatName: 'Maksim'},
    {chatId: '2', chatName: 'Artemka'},
    {chatId: '3', chatName: 'Ivan'},
    {chatId: '4', chatName: 'Kolya'},
    {chatId: '5', chatName: 'Jane'}
  ]
  const messagesData = [
    {id: 1, textMessage: 'Hi'},
    {id: 2, textMessage: 'How are you?'},
    {id: 3, textMessage: 'How do u do?'},
    {id: 4, textMessage: 'Nice to meet you'}
  ]

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