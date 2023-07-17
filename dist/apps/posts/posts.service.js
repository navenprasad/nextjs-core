"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let PostsService = exports.PostsService = class PostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const post = await this.prisma.post.findMany();
        console.log(post);
        return post;
    }
    async create(createPostDto) {
        const post = await this.prisma.post.create({
            data: {
                title: createPostDto.title,
                content: createPostDto.content,
            },
        });
        return post;
    }
    async findOne(id) {
        const post = await this.prisma.post.findUnique({
            where: {
                id: id,
            },
        });
        return post;
    }
    async deleteOne(id) {
        const post = await this.prisma.post.delete({
            where: {
                id: id,
            },
        });
        return post;
    }
    async updateOne(id, createPostDto) {
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
        }
        catch (error) {
            console.log(error);
            return error.meta;
        }
    }
};
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostsService);
//# sourceMappingURL=posts.service.js.map