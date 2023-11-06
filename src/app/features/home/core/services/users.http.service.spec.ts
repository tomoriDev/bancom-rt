import { HttpClient } from '@angular/common/http';
import { UsersHttp } from './users.http.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { UserModel } from '../models/user.model';
import { of } from 'rxjs';
import { PostModel } from '../models/post.model';
import { IPostRequest } from '../interfaces/post.interface';

describe('UsersHttp', () => {
  let service: UsersHttp;
  let stubHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    stubHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new UsersHttp(stubHttpClient);
  });

  describe('when fetchUsers', () => {
    it('#should return an array of UserModel instance', fakeAsync(() => {
      let users: any[] = [];
      stubHttpClient.get.and.returnValue(
        of([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: {
                lat: '-37.3159',
                lng: '81.1496',
              },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          },
        ])
      );

      service.fetchUsers().subscribe((response) => {
        users = response;
      });
      tick();

      expect(users[0]).toBeInstanceOf(UserModel);
    }));
  });

  describe('when fetchUserPosts', () => {
    it('#should return an array of PostModel instance', fakeAsync(() => {
      let posts: any[] = [];
      stubHttpClient.get.and.returnValue(
        of([
          {
            userId: 1,
            id: 1,
            title:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
          {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          },
          {
            userId: 1,
            id: 3,
            title:
              'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
          },
        ])
      );

      service.fetchUserPosts(123).subscribe((response) => {
        posts = response;
      });
      tick();

      expect(posts[0]).toBeInstanceOf(PostModel);
    }));
  });

  describe('when createPost', () => {
    it('#should return an PostModel instance', fakeAsync(() => {
      let newPost = null;
      const request: IPostRequest = {
        body: 'test',
        title: 'title',
        userId: 120,
      };
      stubHttpClient.post.and.returnValue(
        of({
          body: 'raa',
          title: 'test',
          userId: 1,
          id: 101,
        })
      );

      service.createPost(request).subscribe((response) => {
        newPost = response;
      });
      tick();

      expect(newPost).toBeInstanceOf(PostModel);
    }));
  });
});
