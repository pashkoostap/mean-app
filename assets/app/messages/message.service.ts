import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from './message.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  messages: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.messages.push(message);
    const body = JSON.stringify(message);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http
      .post('http://localhost:10000/message', body, { headers })
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
          const msg = new Message(message.content, 'User', message._id, null);
          transformedMessages.push(msg);
        }

        this.messages = transformedMessages;
        return this.messages;
      })
      .catch((err: Response) => Observable.throw(err));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
