"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = exports.PostsService = class PostsService {
    constructor() {
        this.postId = 1;
        this.posts = [];
    }
    findAll() {
        return this.posts;
    }
    create(post) {
        post.id = this.postId;
        this.postId++;
        this.posts.push(post);
    }
    findOne(id) {
        return this.posts.find((post) => post.id == id);
    }
    deleteOne(id) {
        const index = this.posts.findIndex((post) => post.id == id);
        console.log(index);
        this.posts.splice(index, 1);
    }
    updateOne(id, post) {
        const index = this.posts.findIndex((post) => post.id == id);
        this.posts[index] = post;
        console.log(this.posts[index]);
    }
};
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);

//# sourceMappingURL=posts.service.js.map