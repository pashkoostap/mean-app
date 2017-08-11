import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogOutComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onLogOut() {
    this.authService.loguot();
    this.router.navigate(['/auth', 'signin']);
  }
}
