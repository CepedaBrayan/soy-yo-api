import { IsNumber, IsOptional, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class Entity {
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'entity_id',
  })
  entity_id: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'name',
  })
  name: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'identificationNumber',
  })
  identificationNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'expirationDate',
  })
  expirationDate: String;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'contactName',
  })
  contactName: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'contacEmail',
  })
  contactEmail: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'logo',
  })
  logo: string;
}
