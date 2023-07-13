import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './Validation/create-profile.dto';
import { UpdateProfileDto } from './Validation/update-profile.dto';
import { Acess, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard,RoleGuard)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateProfileDto) {
    return this.profileService.create(data);
  }
  
  @Acess(Role.Admin)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string, @UserAuth() user: {role: number, id: string}) {
    return this.profileService.findOne(id, user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProfileDto, @UserAuth() user: {role: number, id: string}) {
    return this.profileService.update(id, data, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @UserAuth() user: {role: number, id: string}) {
    return this.profileService.remove(id, user);
  }
}
