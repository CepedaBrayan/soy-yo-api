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
import { Entity } from './entities/entity.entity';
import { Error } from './entities/error.entity';
import {
  ApiCreatedResponse,
  ApiResponse,
  ApiOkResponse,
  ApiBody,
  ApiTags,
  ApiProperty,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Post('/filter')
  @ApiOperation({
    summary: 'Filtrar listado entidades ordenadas alfabeticamente',
  })
  @ApiTags('Entity filter')
  @ApiBody({ type: FilterEntityDto })
  @ApiCreatedResponse({
    description: 'Ok',
    type: [Entity],
  })
  @ApiResponse({
    status: 400,
    description: 'Error en la validación datos de entrada',
    type: Error,
  })
  @ApiResponse({
    status: 404,
    description: 'Error no se encuentra para rango especificado',
    type: Error,
  })
  create(@Body() filterEntityDto: FilterEntityDto) {
    return this.entitiesService.filter(filterEntityDto);
  }
}
