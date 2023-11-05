import { ITablePost } from '../interfaces/post.interface';
import { IUserResponse } from '../interfaces/user.interface';

export class UserModel {
  id: number;
  name: string;
  username: string;
  address: string;
  email: string;
  phone: string;
  posts: ITablePost[];
  expanded: boolean;
  fetchedPosts: boolean;

  constructor(user: IUserResponse) {
    const { street, suite, city } = user.address;

    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.address = `${street}, ${suite}, ${city}`;
    this.email = user.email;
    this.phone = user.phone;
    this.posts = [];
    this.expanded = false;
    this.fetchedPosts = false;
  }
}
