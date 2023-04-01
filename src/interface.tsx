export interface IPost {
  id: number,
  postMessage: string,
  likesCount: number
}

export interface IDialogData{
  chatId: number,
  chatName: string
}

export interface IMessageData{
  id: number,
  textMessage: string
}