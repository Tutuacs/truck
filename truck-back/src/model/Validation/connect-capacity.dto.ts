import { IsString } from 'class-validator';

export class ConnectCapacityDto {
  @IsString()
  capacity: string;
}
