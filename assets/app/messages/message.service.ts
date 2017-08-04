import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from './message.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

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
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
