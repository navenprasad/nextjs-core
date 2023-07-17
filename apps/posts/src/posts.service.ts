import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/posts.interface';

@Injectable()
export class PostsService {
  //Array stored in memory

  tempPost = {
    id: 1,
    title: 'This is a title',
    content: 'This is the content',
  };
  private readonly posts: Post[] = [this.tempPost];

  findAll() {
    return this.posts;
  }

  create(post: Post) {
    this.posts.push(post);
  }

  findOne(id: number) {
    const a = this.posts.find((post) => post.id == id);
    console.log(a);
    return this.posts.find((post) => post.id == id);
  }
}
