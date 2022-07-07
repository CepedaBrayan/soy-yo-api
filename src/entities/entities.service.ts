import { Injectable } from '@nestjs/common';
import { FilterEntityDto } from './dto/filter-entity.dto';
const axios = require('axios');

@Injectable()
export class EntitiesService {
  async filter(filterEntityDto: FilterEntityDto) {
    await axios
      .get(
        'https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/1',
      )
      .then((response) => {
        console.log(response.data);
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
