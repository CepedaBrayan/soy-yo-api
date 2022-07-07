import { Injectable } from '@nestjs/common';
import { FilterEntityDto } from './dto/filter-entity.dto';
const axios = require('axios');

@Injectable()
export class EntitiesService {
  async filter(filterEntityDto: FilterEntityDto) {
    /* To do code here */
    return 'Hello World!';
  }
}
