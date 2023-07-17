import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
