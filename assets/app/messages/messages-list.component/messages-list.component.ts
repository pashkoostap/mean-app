import { Component, OnInit } from "@angular/core";
import { Message } from "../message.model";
import { MessageService } from "../message.service";

@Component({
  selector: "app-messages-list",
  templateUrl: "./messages-list.component.html"
})
export class MessagesListComponent implements OnInit {
  messages: Message[];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}
