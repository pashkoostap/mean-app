import { Component, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [
    `
  .author {
    display: inline-block;
    font-style: italic;
    font-size: 12px;
    width: 80%;}
  .config {
    display: inline-block;
    text-align: right;
    font-size: 12px;
    width: 20%;
  }
  .app-comp-wrap {
    font-size: 0;}
    `
  ]
})
export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {}

  onDelete(e: Event) {
    e.preventDefault();
    this.messageService
      .deleteMessage(this.message)
      .subscribe(result => console.log(result));
  }

  onEdit(e: Event) {
    e.preventDefault();
    this.messageService.editMessage(this.message);
  }
}
