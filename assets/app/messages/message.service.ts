import { Message } from './message.model';

export class MessageService {
  messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessages() {
    console.log(this.messages);
    return this.messages;
  }

  deleteMessage(message: Message) {
    console.log(this.messages);
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
