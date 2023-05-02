import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CrudModule } from './Crud_Module/crud.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CrudModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path: 'us*rss', method: RequestMethod.POST});
  }
}
