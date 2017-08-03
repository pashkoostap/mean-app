import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent {
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
