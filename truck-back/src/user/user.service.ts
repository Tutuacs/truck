import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './Validation/create-user.dto';
import { UpdateUserDto } from './Validation/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.createUser(data);
  }

  findAll() {
    return this.prisma.findAllUsers();
  }

  async findOne(id: string) {
    await this.prisma.existUserId(id);
    return this.prisma.findUniqUser(id);
  }

  async update(id: string, data: UpdateUserDto) {
    await this.prisma.existUserId(id);
    return this.prisma.updateUser(id,data);
  }

  async remove(id: string) {
    await this.prisma.existUserId(id);
    return this.prisma.removeUser(id);
  }
}
