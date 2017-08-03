import { Component } from "@angular/core";
import { Message } from "../message.model";
import { MessageService } from "../message.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html"
})
export class MessageInputComponent {
  constructor(private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    console.log(form);
    let { value: { content } } = form;
    if (content.length) {
      const message = new Message(content, "Max");
      this.messageService.addMessage(message);
      form.resetForm();
    }
  }
}
