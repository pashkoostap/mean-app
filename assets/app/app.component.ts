import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  messages: Message[] = [
    new Message('Some message 1', 'Author'),
    new Message('Some message 2', 'Author'),
    new Message('Some message 3', 'Author'),
    new Message('Some message 4', 'Author'),
    new Message('Some message 5', 'Author')
  ];

  editEvent(e) {
    console.log('app component', e);
  }
}
