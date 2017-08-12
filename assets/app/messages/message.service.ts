import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from './message.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  messagesIsEdited = new EventEmitter<Message>();

  constructor(private http: Http) {}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const token = localStorage.getItem('token')
      ? `?token=${localStorage.getItem('token')}`
      : '';

    return this.http
      .post(`http://localhost:10000/message${token}`, body, { headers })
      .map((res: Response) => {
        const { result } = res.json();
        const { content, user: { _id, firstName, lastName } } = result;
        const msgID = result._id;

        if (result) {
          const message = new Message(
            content,
            `${firstName} ${lastName}`,
            msgID,
            _id
          );

          this.messages.push(message);
          return message;
        } else {
          return Observable.throw(res.json());
        }
      })
      .catch((err: Response) => Observable.throw(err.json()));
  }

  editMessage(message: Message) {
    this.messagesIsEdited.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const token = localStorage.getItem('token')
      ? `?token=${localStorage.getItem('token')}`
      : '';

    return this.http
      .patch(
        `http://localhost:10000/message/${message.messageID}${token}`,
        body,
        {
          headers
        }
      )
      .map((res: Response) => res.json())
      .catch((err: Response) => Observable.throw(err.json()));
  }

  getMessages() {
    return this.http
      .get('http://localhost:10000/message')
      .map((res: Response) => {
        const { messages } = res.json();
        let transformedMessages: Message[] = [];

        for (let message of messages) {
          const {
            content,
            user: { firstName, lastName, email, _id }
          } = message;
          const msgID = message._id;
          const msg = new Message(
            content,
            `${firstName} ${lastName}`,
            msgID,
            _id
          );
          transformedMessages.push(msg);
        }

        this.messages = transformedMessages;
        return this.messages;
      })
      .catch((err: Response) => Observable.throw(err));
  }

  deleteMessage(message: Message) {
    const token = localStorage.getItem('token')
      ? `?token=${localStorage.getItem('token')}`
      : '';
    this.messages.splice(this.messages.indexOf(message), 1);

    return this.http
      .delete(`http://localhost:10000/message/${message.messageID}${token}`)
      .map((res: Response) => res.json())
      .catch((err: Response) => Observable.throw(err.json()));
  }
}
