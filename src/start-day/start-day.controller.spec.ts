import { Test, TestingModule } from '@nestjs/testing';
import { StartDayController } from './start-day.controller';

describe('StartDayController', () => {
  let controller: StartDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StartDayController],
    }).compile();

    controller = module.get<StartDayController>(StartDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
