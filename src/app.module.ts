import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspaceModule } from './workspace/workspace.module';
import { ProjectsModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeTrackingModule } from './time_tracking/time_tracking.module';
import { StartDayModule } from './start-day/start-day.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [WorkspaceModule, ProjectsModule, TaskModule, AuthModule, TypeOrmModule, TimeTrackingModule, StartDayModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})  
export class AppModule {}
