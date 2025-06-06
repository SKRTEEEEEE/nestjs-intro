import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger.middleware';
import { AuthMiddleware } from './auth.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //consumer.apply().forRoutes("users") -> coje todas las rutas de users
    // consumer.apply(LoggerMiddleware).forRoutes({path: 'users', method: RequestMethod.GET})
    // .apply(AuthMiddleware);
  }
}
