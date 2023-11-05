import { Component, OnInit } from '@angular/core';
import { COLUMN_CONFIG } from '../../core/config/users-columns.config';
import { UserModel } from '../../core/models/user.model';
import { UsersHttp } from '../../core/services/users.http.service';
import { UsersService } from '../../core/services/users.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  columnConfig = COLUMN_CONFIG;
  users: UserModel[] = [];

  constructor(public usersHttp: UsersHttp, public usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersHttp
      .fetchUsers()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.usersService.setUsers([...response]);
        },
      });
  }

  getPostsByUsers(event: unknown) {
    const user = event as UserModel;

    if (user.fetchedPosts) {
      return;
    }

    this.usersHttp.fetchUserPosts(user.id).subscribe({
      next: (response) => {
        const users = this.usersService.getUsers();
        const userIndex = users.findIndex((u) => u.id === user.id);
        users[userIndex].posts = [...response];
        users[userIndex].fetchedPosts = true;
      },
    });
  }
}
