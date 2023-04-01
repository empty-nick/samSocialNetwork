import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const postsData = [
  {id: 1, postMessage: 'My first post', likesCount: 12},
  {id: 2, postMessage: 'Hi, how are you?', likesCount: 11}
]

const dialogsData = [
  {chatId: 1, chatName: 'Maksim'},
  {chatId: 2, chatName: 'Artemka'},
  {chatId: 3, chatName: 'Ivan'},
  {chatId: 4, chatName: 'Kolya'},
  {chatId: 5, chatName: 'Jane'}
]
const messagesData = [
  {id: 1, textMessage: 'Hi'},
  {id: 2, textMessage: 'How are you?'},
  {id: 3, textMessage: 'How do u do?'},
  {id: 4, textMessage: 'Nice to meet you'}
]

root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
