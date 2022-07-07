import { Test, TestingModule } from '@nestjs/testing';
import { EntitiesService } from './entities.service';
import { Entity } from './entities/entity.entity';
import { FilterEntityDto } from './dto/filter-entity.dto';

describe('EntitiesService', () => {
  let service: EntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntitiesService],
    }).compile();

    service = module.get<EntitiesService>(EntitiesService);
  });

  it('God range test', async () => {
    const result = await service.filter({ start_id: 3, end_id: 10 });
    expect(result.entities[0].name).toBe('bodafone4');
  });

  it('Bad range test', async () => {
    try {
      await service.filter({ start_id: 3, end_id: 1 });
    } catch (error) {
      expect(error.message).toBe(
        'Error no se encuentra para rango especificado',
      );
    }
  });
});
