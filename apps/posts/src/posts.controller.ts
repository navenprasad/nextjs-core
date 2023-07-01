import { Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): string {
    return 'This returns all posts';
  }

  @Post()
  createPost(): string {
    return 'This creates a post';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
