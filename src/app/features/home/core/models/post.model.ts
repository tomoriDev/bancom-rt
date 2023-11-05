import { IPostResponse } from '../interfaces/post.interface';

export class PostModel {
  title: string;
  description: string;
  userId: number;

  constructor(post: IPostResponse) {
    this.title = post.title;
    this.description = post.body;
    this.userId = post.userId;
  }
}
