import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './Validation/create-user.dto';
import { UpdateUserDto } from './Validation/update-user.dto';
import { Acess, ParamId, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Acess(Role.Admin)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@ParamId() id: string, @UserAuth() user: {role: number, userId: string}) {
    return this.userService.findOne(id,user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto, @UserAuth() user: {role: number, userId: string}) {
    return this.userService.update(id, data, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @UserAuth() user: {role: number, userId: string}) {
    return this.userService.remove(id, user);
  }
}
