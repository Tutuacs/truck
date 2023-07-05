import { PartialType } from '@nestjs/mapped-types';
import { ConnectUsertruckDto } from './connect-usertruck.dto';

export class UpdateUsertruckDto extends PartialType(ConnectUsertruckDto) {}
