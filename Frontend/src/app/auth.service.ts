import { Injectable } from '@angular/core';
import { UserModel } from './signup/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user: UserModel) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
