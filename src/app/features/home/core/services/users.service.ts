import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users = new BehaviorSubject<UserModel[]>([]);
  users$ = this.users.asObservable();

  setUsers(users: UserModel[]) {
    this.users.next([...users]);
  }

  getUsers() {
    return this.users.getValue();
  }
}
