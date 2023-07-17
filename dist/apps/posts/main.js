"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const posts_module_1 = require("./posts.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(posts_module_1.PostsModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map