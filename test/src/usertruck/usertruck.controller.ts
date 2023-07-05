import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsertruckService } from './usertruck.service';
import { ConnectUsertruckDto } from './Validation/connect-usertruck.dto';
import { UpdateUsertruckDto } from './Validation/update-usertruck.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@Controller('usertruck')
export class UsertruckController {
  constructor(private readonly usertruckService: UsertruckService) {}

  @UseGuards(AuthGuard, RoleGuard)
  @Post(':connect')
  connect(@Param('connect') connect: string, @Body() data: ConnectUsertruckDto, @UserAuth('userId') id: string) {
    return this.usertruckService.connect(connect,data,id);
  }

  @Get('all/:brand')
  findAll() {
    return this.usertruckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usertruckService.findOne(id);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUsertruckDto) {
    return this.usertruckService.update(id, data);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usertruckService.remove(id);
  }
}
