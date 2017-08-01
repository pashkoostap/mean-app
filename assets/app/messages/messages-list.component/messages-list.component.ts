import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-messages-list',
  template: `
    <div class='col-md-8 col-md-offset-2'>
     <app-message [message]='message' *ngFor='let message of messages'></app-message>
    </div>
    `
})
export class MessagesListComponent {
  messages: Message[] = [
    new Message('Some message 1', 'Author'),
    new Message('Some message 2', 'Author'),
    new Message('Some message 3', 'Author'),
    new Message('Some message 4', 'Author'),
    new Message('Some message 5', 'Author')
  ];
}
