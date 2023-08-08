import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProfileDto } from './Validation/create-profile.dto';
import { UpdateProfileDto } from './Validation/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/Validation/create-user.dto';
import { Role } from 'src/decorators';

@Injectable()
export class ProfileService {
  userDto = new CreateUserDto();

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProfileDto) {
    const userId = await this.prisma.createUser(this.userDto);
    data.userId = userId.id;
    return this.prisma.createProfile(data);
  }

  findAll() {
    return this.prisma.findAllProfiles();
  }

  async findOne(id: string, user: { role: number; id: string }) {
    if (user.role != Role.Admin) {
      await this.prisma.existProfileId(id);
      if (id == user.id) {
        return this.prisma.findUniqProfile(id);
      } else {
        throw new UnauthorizedException(
          'Ops, parece que você está tentando visualizar informações de outros perfis',
        );
      }
    }
    await this.prisma.existProfileId(id);
    return this.prisma.findUniqProfile(id);
  }

  async update(
    id: string,
    data: UpdateProfileDto,
    user: { role: number; id: string },
  ) {
    if (user.role != Role.Admin) {
      await this.prisma.existProfileId(id);
      if (user.id != id) {
        throw new UnauthorizedException(
          'Ops, parece que você está tentando atualizar informações de outros perfis',
        );
      } else {
        if (data.email) {
          await this.prisma.existProfileEmail(id, data.email);
        }
        return this.prisma.updateProfile(id, data);
      }
    }
    await this.prisma.existProfileId(id);
    return this.prisma.updateProfile(id, data);
  }

  async remove(id: string, user: { role: number; id: string }) {
    if (user.id != id) {
      throw new UnauthorizedException(
        'Ops, parece que você está tentando deletar informações de outros perfis',
      );
    }
    await this.prisma.existProfileId(id);
    return this.prisma.removeProfile(id);
  }
}
