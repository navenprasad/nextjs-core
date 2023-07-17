import { Injectable } from '@nestjs/common';
// import { Post } from './interfaces/posts.interface';
import { PrismaService } from './prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Post[]> {
    const post = await this.prisma.post.findMany();
    console.log(post);
    return post;
  }

  // create(post: Post) {
  //   post.id = this.postId;
  //   this.postId++;
  //   this.posts.push(post);
  // }

  // findOne(id: number) {
  //   return this.posts.find((post) => post.id == id);
  // }

  // deleteOne(id: number) {
  //   const index = this.posts.findIndex((post) => post.id == id);
  //   console.log(index);
  //   this.posts.splice(index, 1);
  // }

  // updateOne(id: number, post: Post) {
  //   const index = this.posts.findIndex((post) => post.id == id);
  //   this.posts[index] = post;
  //   console.log(this.posts[index]);
  // }
}
