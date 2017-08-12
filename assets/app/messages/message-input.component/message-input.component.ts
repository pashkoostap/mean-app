import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
  message: Message;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.messagesIsEdited.subscribe(
      (message: Message) => (this.message = message)
    );
  }

  onClear(form: NgForm) {
    form.resetForm();
    this.message = null;
  }

  onSubmit(form: NgForm) {
    const { value: { content } } = form;

    if (this.message) {
      this.message.content = content;
      this.messageService
        .updateMessage(this.message)
        .subscribe(result => console.log(result));
      this.message = null;
    } else {
      const message = new Message(content, 'Max');

      this.messageService
        .addMessage(message)
        .subscribe(data => console.log(data), err => console.error(err));
    }

    form.resetForm();
  }
}
