import { Test, TestingModule } from '@nestjs/testing';
import { StartDayService } from './start-day.service';

describe('StartDayService', () => {
  let service: StartDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartDayService],
    }).compile();

    service = module.get<StartDayService>(StartDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
