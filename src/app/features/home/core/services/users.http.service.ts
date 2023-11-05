import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/user.interface';
import { Observable, map } from 'rxjs';
import { UserModel } from '../models/user.model';
import {
  IPostRequest,
  IPostResponse,
  ITablePost,
} from '../interfaces/post.interface';
import { PostModel } from '../models/post.model';

@Injectable()
export class UsersHttp {
  constructor(public httpClient: HttpClient) {}

  fetchUsers(): Observable<UserModel[]> {
    const url = `https://jsonplaceholder.typicode.com/users`;

    return this.httpClient.get<IUserResponse[]>(url).pipe(
      map((user) => {
        return user.map((user) => new UserModel(user));
      })
    );
  }

  fetchUserPosts(userId: number): Observable<PostModel[]> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

    return this.httpClient.get<IPostResponse[]>(url).pipe(
      map((posts) => {
        return posts.map((post) => new PostModel(post));
      })
    );
  }

  createPost(request: IPostRequest): Observable<PostModel> {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    return this.httpClient
      .post<IPostResponse>(url, request)
      .pipe(map((post) => new PostModel(post)));
  }
}
