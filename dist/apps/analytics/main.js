"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const analytics_module_1 = require("./analytics.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(analytics_module_1.AnalyticsModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map