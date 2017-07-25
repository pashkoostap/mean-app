import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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
    font-size: 0;
  }`
  ]
})
export class AppComponent {
  message = {
    content: 'Some message text',
    author: 'Max'
  };
}
