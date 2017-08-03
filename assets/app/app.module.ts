import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessagesComponent } from "./messages/messages.component/messages.component";
import { MessageComponent } from "./messages/message.component/message.component";
import { MessagesListComponent } from "./messages/messages-list.component/messages-list.component";
import { MessageInputComponent } from "./messages/message-input.component/message-input.component";
import { MessageService } from "./messages/message.service";
import { AuthComponent } from "./auth/auth.component/auth.component";
import { HeaderComponent } from "./header/header.component";
import { SignInComponent } from "./auth/signin.component/signin.component";
import { SignUpComponent } from "./auth/signup.component/signup.component";
import { LogOutComponent } from "./auth/logout.component/logout.component";

import { router } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    LogOutComponent
  ],
  imports: [BrowserModule, FormsModule, router],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
