export class Message {
  content: string;
  username: string;
  messageID: string;
  userID: string;

  constructor(
    content: string,
    username: string,
    messageID?: string,
    userID?: string
  ) {
    this.content = content;
    this.username = username;
    this.messageID = messageID;
    this.userID = userID;
  }
}
