import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGoalDTO {
  @ApiProperty({
    example: 'Buy a new house',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'This is going to be my first asset',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateGoalDTO extends PartialType(CreateGoalDTO) {}
