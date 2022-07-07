import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Entity } from './entities/entity.entity';
import { FilterEntityDto } from './dto/filter-entity.dto';
const axios = require('axios');

@Injectable()
export class EntitiesService {
  async filter(filterEntityDto: FilterEntityDto) {
    try {
      const { start_id, end_id } = filterEntityDto;
      if (
        start_id > end_id ||
        start_id < 1 ||
        start_id > 10 ||
        end_id < 1 ||
        end_id > 10
      )
        throw new NotFoundException(
          'Error no se encuentra para rango especificado',
        );
      const allEntities = [Entity];
      const url = 'https://demo9850821.mockable.io/entities/';
      for (let i = start_id; i <= end_id; i++) {
        const response = await axios
          .get(url + i)
          .then((response) => {
            allEntities.push(response.data);
          })
          .catch((error) => {
            throw new NotFoundException(error.message);
          });
      }
      return allEntities.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      throw new ServiceUnavailableException();
    }
  }
}
