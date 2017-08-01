import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message.component/message.component';
import { MessagesListComponent } from './messages/messages-list.component/messages-list.component';
import { MessageInputComponent } from './messages/message-input.component/message-input.component';
import { MessageService } from './messages/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesListComponent,
    MessageInputComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
