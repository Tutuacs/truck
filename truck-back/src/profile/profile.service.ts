import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './Validation/create-profile.dto';
import { UpdateProfileDto } from './Validation/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/Validation/create-user.dto';

@Injectable()
export class ProfileService {

  userDto = new CreateUserDto();

  constructor(private readonly prisma: PrismaService) {}


  async create(data: CreateProfileDto) {
    const userId = await this.prisma.createUser(this.userDto)
    data.userId = userId.id;
    return this.prisma.createProfile(data);
  }

  findAll() {
    return this.prisma.findAllProfiles();
  }

  async findOne(id: string) {
    await this.prisma.existProfileId(id);
    return this.prisma.findUniqProfile(id) ;
  }

  async update(id: string, data: UpdateProfileDto) {
    await this.prisma.existProfileId(id);
    if(data.email){
      await this.prisma.existProfileEmail(id,data.email);
    }
    return this.prisma.updateProfile(id,data);
  }

  async remove(id: string) {
    await this.prisma.existProfileId(id);
    return this.prisma.removeProfile(id);
  }
}
