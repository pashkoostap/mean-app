import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  signUp(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-type': 'application/json' });

    return this.http
      .post('http://localhost:10000/user', body, { headers })
      .map((res: Response) => res.json())
      .catch((err: Response) => Observable.throw(err.json()));
  }
}
