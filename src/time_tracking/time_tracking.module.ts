import { Module } from '@nestjs/common';
import { TimeTrackingService } from './time_tracking.service';
import { TimeTrackingController } from './time_tracking.controller';

@Module({
  controllers: [TimeTrackingController],
  providers: [TimeTrackingService],
})
export class TimeTrackingModule {}
