import { Injectable } from '@nestjs/common';
// import { Post } from './interfaces/posts.interface';
import { PrismaService } from './prisma.service';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import e from 'express';
import { error } from 'console';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<PostModel[]> {
    const post = await this.prisma.post.findMany();
    console.log(post);
    return post;
  }

  async create(createPostDto: CreatePostDto): Promise<PostModel> {
    const post = await this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
      },
    });

    return post;
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  }

  async deleteOne(id: number) {
    const post = await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
    return post;
  }

  async updateOne(id: number, createPostDto: CreatePostDto) {
    try {
      const post = await this.prisma.post.update({
        where: {
          id: id,
        },
        data: {
          title: createPostDto.title,
          content: createPostDto.content,
        },
      });
      return post;
    } catch (error) {
      console.log(error);
      return error.meta;
    }
  }
}
