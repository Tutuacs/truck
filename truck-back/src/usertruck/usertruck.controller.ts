import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsertruckService } from './usertruck.service';
import { ConnectUsertruckDto } from './Validation/create-usertruck.dto';
import { UpdateUsertruckDto } from './Validation/update-usertruck.dto';

@Controller('usertruck')
export class UsertruckController {
  constructor(private readonly usertruckService: UsertruckService) {}

  @Post(':connect/')
  connect(@Param('connect') connect: string, @Body() data: ConnectUsertruckDto) {
    return this.usertruckService.connect(connect,data);
  }

  @Get()
  findAll() {
    return this.usertruckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usertruckService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUsertruckDto) {
    return this.usertruckService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usertruckService.remove(id);
  }
}
