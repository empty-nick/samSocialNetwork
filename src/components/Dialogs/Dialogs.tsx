import React from "react"
import css from "./Dialogs.module.css"
import Chat from "./Chat/Chat";
import MessageWindow from "./MessageWindow/MessageWindow";

const Dialogs = () => {
  const dialogsData = [
    { chatId: '1', chatName: 'Maksim' },
    { chatId: '2', chatName: 'Artemka' },
    { chatId: '3', chatName: 'Ivan' },
    { chatId: '4', chatName: 'Kolya' },
    { chatId: '5', chatName: 'Jane' }
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

          <Chat chatName={dialogsData[0].chatName} chatId={dialogsData[0].chatId} />
          <Chat chatName={dialogsData[1].chatName} chatId={dialogsData[1].chatId} />

        </div>

        <div className={css.messages}>

          <MessageWindow textMessage={messagesData[0].textMessage} />
          <MessageWindow textMessage={messagesData[1].textMessage} />

        </div>
      </div>
  )
}

export default Dialogs