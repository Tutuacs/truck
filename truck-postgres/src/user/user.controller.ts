import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Acess(Role.Admin)
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  
  @Acess()
  @Get('profile/:id')
  findByProfile(@Param('id') id: string, @UserAuth() user: {role: Role, id: string, userId: string}) {
    return this.userService.findOne(id, user);
  }
  
  @Acess(Role.Admin)
  @Get(':id')
  findOne(@Param('id') id: string, @UserAuth() user: {role: Role, id: string, userId: string}) {
    return this.userService.findOne(id, user);
  }
  
  @Acess()
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto, @UserAuth() user: {role: Role, id: string, userId: string}){
    return this.userService.update(id, data, user);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(id);
  // }
}
