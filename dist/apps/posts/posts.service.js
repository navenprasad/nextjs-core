"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = exports.PostsService = class PostsService {
    constructor() {
        this.tempPost = {
            id: 1,
            title: 'This is a title',
            content: 'This is the content',
        };
        this.posts = [this.tempPost];
    }
    findAll() {
        return this.posts;
    }
    create(post) {
        this.posts.push(post);
    }
    findOne(id) {
        const a = this.posts.find((post) => post.id == id);
        console.log(a);
        return this.posts.find((post) => post.id == id);
    }
};
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
//# sourceMappingURL=posts.service.js.map