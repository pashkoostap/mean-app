import { Component } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSave(input: HTMLInputElement) {
    let { value } = input;

    if (value.length) {
      const message = new Message(input.value, 'Max');
      this.messageService.addMessage(message);
      input.value = '';
    }
  }
}
