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
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard, RoleGuard)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  // @Post()
  // create(@Body() createProfileDto: CreateProfileDto) {
  //   return this.profileService.create(createProfileDto);
  // }

  @Acess(Role.Admin)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Acess()
  @Get('me')
  profileInfo(@UserAuth() user: {id: string, userId: string}) {
    return this.profileService.profileInfo(user);
  }

  @Acess()
  @Get(':id')
  findOne(@Param('id') id: string, @UserAuth() user: {id: string,role: Role} ) {
    return this.profileService.findOne(id, user);
  }

  @Acess()
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProfileDto, @UserAuth() user: {id: string, role: Role}) {
    return this.profileService.update(id, data, user);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.profileService.remove(id);
  // }
}
