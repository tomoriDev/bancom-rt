import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IPostRequest, ITableUser } from '../../core/interfaces/post.interface';
import { UsersHttp } from '../../core/services/users.http.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-manage-posts-create',
  templateUrl: './manage-posts-create.component.html',
  styleUrls: ['./manage-posts-create.component.scss'],
})
export class ManagePostsCreateComponent {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ITableUser,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ManagePostsCreateComponent>,
    public usersHttp: UsersHttp,
    public usersService: UsersService
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  registerPost() {
    const request: IPostRequest = {
      body: this.form.value.description,
      title: this.form.value.title,
      userId: this.data.id,
    };

    this.usersHttp.createPost(request).subscribe({
      next: (newPost) => {
        const users = this.usersService.getUsers();
        const userIndex = users.findIndex((u) => u.id === newPost.userId);
        users[userIndex].posts = [newPost, ...users[userIndex].posts];
        this.closeModal();
      },
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
