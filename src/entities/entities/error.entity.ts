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
} from '@nestjs/swagger';

export class Error {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Error',
    example: 'Error en validación datos de entrada',
  })
  Error: string;
}
