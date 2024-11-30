import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeTrackingDto } from './create-time_tracking.dto';

export class UpdateTimeTrackingDto extends PartialType(CreateTimeTrackingDto) {}
