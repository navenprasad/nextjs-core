import {
  Controller,
  Get,
  Param,
  Put,
  Post,
  Body,
  Req,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostInterface } from './interfaces/posts.interface';
import { Prisma, Post as PostModel } from '@prisma/client';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): Promise<PostModel[]> {
    const allPosts = this.postsService.findAll();
    return allPosts;
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): string {
    console.log(this.postsService.create(createPostDto));
    return `This is the return response`;
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PostModel> {
    return this.postsService.findOne(Number(id));
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number): string {
    this.postsService.deleteOne(Number(id));
    return 'item deleted';
  }
  @Put(':id')
  updateOne(
    @Param('id') id: number,
    @Body() createPostDto: CreatePostDto,
  ): string {
    this.postsService.updateOne(Number(id), createPostDto);
    return 'item updated';
  }
}
