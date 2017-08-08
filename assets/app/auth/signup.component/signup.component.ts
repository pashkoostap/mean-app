import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent {
  myForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const { email, firstName, lastName, password } = this.myForm.value;
    const user = new User(email, password, firstName, lastName);

    this.authService.signUp(user).subscribe(data => console.log(data));
  }
}
