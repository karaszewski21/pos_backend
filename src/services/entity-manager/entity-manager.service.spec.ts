import { Test, TestingModule } from '@nestjs/testing';
import { EntityManagerService } from './entity-manager.service';

describe('EntityManagerService', () => {
  let service: EntityManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityManagerService],
    }).compile();

    service = module.get<EntityManagerService>(EntityManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
