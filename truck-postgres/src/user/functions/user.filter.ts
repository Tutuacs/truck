import { Injectable } from '@nestjs/common';
import { UserVerify } from './user-exist.filter';
import { UserAbstract } from './user-abstract';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserFunctions extends UserVerify implements UserAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createUser(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  findUser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByProfile(id: string) {
    const p = await this.prisma.profile.findUnique({
          where: {
              id,
          },
          include: {
              User: true
          }
      });
      return p.User;
  }

  listUser() {
    return this.prisma.user.findMany();
  }

  updateUser(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data });
  }

  removeUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
