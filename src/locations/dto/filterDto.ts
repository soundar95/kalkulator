import { IsOptional } from 'class-validator';

export class FilterDto {
  @IsOptional()
  city?: string;
  @IsOptional()
  country?: string;
  @IsOptional()
  state?: string;
}
