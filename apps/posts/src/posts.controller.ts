import { Controller, Get, Param, Post, Body, Req, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): string {
    return 'This returns all posts';
  }

  @Post()
  createPost(@Req() req, @Body() createPostDto: CreatePostDto): string {
    console.log('This is from createPostDto: ', createPostDto);
    console.log('This is from req.body: ', req.body);
    return `This is the return response`;
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} post`;
  }
}
