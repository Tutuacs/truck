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
import { CreateTruckDto } from './Validation/create-truck.dto';
import { UpdateTruckDto } from './Validation/update-truck.dto';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@UseGuards(AuthGuard,RoleGuard)
@Controller('truck')
export class TruckController {
  constructor(private readonly truckService: TruckService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateTruckDto) {
    return this.truckService.create(data);
  }

  @Post(':connect/:id')
  connect(
    @Param('connect') connect: string,
    @Param('id') id: string,
    @UserAuth('userId') userId: string,
  ) {
    return this.truckService.connect(id, userId, connect);
  }

  @UseGuards()
  @Get('all/:brand')
  findAll(@Param('brand') brand: string) {
    return this.truckService.findAll(brand);
  }

  @UseGuards()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.truckService.findOne(id);
  }

  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param() id: string, @Body() data: UpdateTruckDto) {
    return this.truckService.update(id, data);
  }
  
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param() id: string) {
    return this.truckService.remove(id);
  }
}
