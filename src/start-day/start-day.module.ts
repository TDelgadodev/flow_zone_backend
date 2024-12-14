import { Module } from '@nestjs/common';
import { StartDayService } from './start-day.service';
import { StartDayController } from './start-day.controller';

@Module({
  providers: [StartDayService],
  controllers: [StartDayController]
})
export class StartDayModule {}
