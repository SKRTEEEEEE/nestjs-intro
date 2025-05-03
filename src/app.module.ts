import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
  providers: [ UsersService],
})
export class AppModule {}
