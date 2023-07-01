import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  createPost(): string {
    return 'Post created';
  }

  getAllPosts(): string {
    return 'All posts';
  }
}
