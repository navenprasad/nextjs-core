import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(): string {
    return this.postsService.createPost();
  }

  @Get()
  getAllPosts(): string {
    return this.postsService.getAllPosts();
  }
}
