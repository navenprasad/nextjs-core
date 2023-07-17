import { Controller, Get, Param, Post, Body, Req, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostInterface } from './interfaces/posts.interface';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): PostInterface[] {
    return this.postsService.findAll();
  }

  @Post()
  createPost(@Req() req, @Body() createPostDto: CreatePostDto): string {
    // console.log('This is from createPostDto: ', createPostDto);
    // console.log('This is from req.body: ', req.body);

    this.postsService.create(createPostDto);
    return `This is the return response`;
  }
  @Get(':id')
  findOne(@Param('id') id: number): PostInterface {
    console.log(id);
    return this.postsService.findOne(id);
  }
}
