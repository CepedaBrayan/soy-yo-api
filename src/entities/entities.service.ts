import { Injectable, NotFoundException } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { FilterEntityDto } from './dto/filter-entity.dto';
const axios = require('axios');

@Injectable()
export class EntitiesService {
  async filter(filterEntityDto: FilterEntityDto) {
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

    const url = 'https://demo9850821.mockable.io/entities/';
    for (let i = start_id; i < end_id; i++) {
      const response = await axios.get(url + i);
      console.log(response.data);
    }
    return 'Ok';
  }
}
