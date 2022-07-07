import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { FilterEntityDto } from './dto/filter-entity.dto';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('/filter')
  create(@Body() filterEntityDto: FilterEntityDto) {
    return this.entitiesService.filter(filterEntityDto);
  }
}
