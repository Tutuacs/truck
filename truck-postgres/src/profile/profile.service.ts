import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileAbstract } from './functions/profile-abstract';
import { Role } from 'src/decorators';

@Injectable()
export class ProfileService {

  constructor(private readonly profileFunctions: ProfileAbstract) {}

  // create(createProfileDto: CreateProfileDto) {
  //   return 'This action adds a new profile';
  // }

  findAll() {
    return this.profileFunctions.listProfile();
  }

  profileInfo(user: {id: string, userId: string}) {
    return this.profileFunctions.profileInfo(user);
  }

  async findOne(id: string, user: {id: string, role: Role}) {
    if (user.role != Role.Admin && user.id != id) {
      throw new UnauthorizedException("Você não pode visualizar informações de terceiros");
    }
    const profile = await this.profileFunctions.findProfile(id);
    return {id: profile.id, email: profile.email, role: profile.role, userId: profile.userId, image: profile.image}
  }

  update(id: string, data: UpdateProfileDto, user: {id: string, role: Role}) {
    if (user.role != Role.Admin && user.id != id) {
      throw new UnauthorizedException("Você não pode alterar informações de terceiros");
    }
    return this.profileFunctions.updateProfile(id, data);
  }

  // remove(id: string) {
  //   return `This action removes a #${id} profile`;
  // }
}
