import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Validation/create-user.dto';
import { UpdateUserDto } from './Validation/update-user.dto';
import { Acess, ParamId, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Acess(Role.Admin)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Get()
  findAll(@UserAuth('role') role: number) {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@ParamId() id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
