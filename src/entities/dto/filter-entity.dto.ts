import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

import {
  ApiCreatedResponse,
  ApiResponse,
  ApiOkResponse,
  ApiProperty,
  ApiOperation,
} from '@nestjs/swagger';

export class FilterEntityDto {
  @ApiProperty({
    type: Number,
    description: 'start_id',
    minimum: 1,
    maximum: 10,
    example: 2,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  start_id: number;

  @ApiProperty({
    type: Number,
    description: 'end_id',
    minimum: 1,
    maximum: 10,
    example: 10,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  end_id: number;
}
