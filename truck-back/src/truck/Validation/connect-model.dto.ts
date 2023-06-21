import { IsString } from 'class-validator';

export class ConnectModelDto {
  @IsString()
  model: string;
}
