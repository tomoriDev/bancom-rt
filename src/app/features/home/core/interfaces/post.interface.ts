export interface ITableUser {
  id: number;
  name: string;
  username: string;
  address: string;
  email: string;
  phone: string;
  posts: ITablePost[];
  expanded: boolean;
}

export interface ITablePost {
  title: string;
  description: string;
  userId: number;
}

export interface IPostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostRequest {
  title: string;
  body: string;
  userId: number;
}
