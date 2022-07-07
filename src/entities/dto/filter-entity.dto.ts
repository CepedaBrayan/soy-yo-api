import { IsNumber } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class FilterEntityDto {
  @ApiProperty({
    type: Number,
    description: 'start_id',
    minimum: 1,
    maximum: 10,
    example: 2,
  })
  @IsNumber()
  start_id: number;

  @ApiProperty({
    type: Number,
    description: 'end_id',
    minimum: 1,
    maximum: 10,
    example: 10,
  })
  @IsNumber()
  end_id: number;
}
