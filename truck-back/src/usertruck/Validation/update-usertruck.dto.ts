import { PartialType } from '@nestjs/mapped-types';
import { ConnectUsertruckDto } from './create-usertruck.dto';

export class UpdateUsertruckDto extends PartialType(ConnectUsertruckDto) {}
