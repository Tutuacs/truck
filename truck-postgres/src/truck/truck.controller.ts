import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TruckService } from './truck.service';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';
import { AddRelationDto } from './dto/add-truck.dto';

@UseGuards(AuthGuard, RoleGuard)
@Controller('truck')
export class TruckController {
  constructor(private readonly truckService: TruckService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateTruckDto) {
    return this.truckService.create(data);
  }

  @Get()
  findAll() {
    return this.truckService.findAll();
  }

  @Get('group-trucks')
  groupTrucks() {
    return this.truckService.groupTrucks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.truckService.findOne(id);
  }

  @Get('user-trucks/:userId')
  listByUserId(
    @Param('id') userId: string,
    @UserAuth() user: { role: number; id: string },
  ) {
    return this.truckService.listByUserId(userId, user);
  }

  @Post('link-truck')
  linkTruck(@Body() trucks: AddRelationDto, @UserAuth() user: { userId: string }) {
    return this.truckService.linkTruck(trucks, user);
  }

  @Post('unlink-truck')
  unlinkTruck(
    @Body() trucks: AddRelationDto,
    @UserAuth() user: { userId: string },
  ) {
    return this.truckService.unlinkTruck(trucks, user);
  }

  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTruckDto: UpdateTruckDto) {
    return this.truckService.update(id, updateTruckDto);
  }

  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.truckService.remove(id);
  }
}
