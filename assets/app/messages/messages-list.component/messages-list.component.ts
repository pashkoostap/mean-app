import { Component, OnInit } from "@angular/core";
import { Message } from "../message.model";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages-list",
  template: `
    <div class='col-md-12'>
     <app-message [message]='message' *ngFor='let message of messages'></app-message>
    </div>
    `
})
export class MessagesListComponent implements OnInit {
  messages: Message[];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}
