import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './Validation/create-user.dto';
import { UpdateUserDto } from './Validation/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from 'src/decorators';

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.createUser(data)
  }

  findAll() {
    return this.prisma.findAllUsers();
  }

  async findOne(id: string, user: {role: number, userId: string}) {
    if(user.role != Role.Admin){
      await this.prisma.existUserId(id);
      if(user.userId == id){
        return this.prisma.findUniqUser(id);
      }else{
        throw new UnauthorizedException("Ops, parece que o perfil que você está tentando acessar não é seu.");
      }
    }else{
      await this.prisma.existUserId(id);
      return this.prisma.findUniqUser(id);
    }
  }
  
  async update(id: string, data: UpdateUserDto, user: {role: number, userId: string}) {
    if(user.role != Role.Admin){
      await this.prisma.existUserId(id);
      if(user.userId == id){
        return this.prisma.updateUser(id,data);
      }else{
        throw new UnauthorizedException("Ops, parece que o perfil que você está tentando atualizar não é seu.");
      }
    }else{
      await this.prisma.existUserId(id);
      return this.prisma.findUniqUser(id);
    }
  }
  
  async remove(id: string, user: {role: number, userId: string}) {
    if(user.userId != id){
      throw new UnauthorizedException("Ops, parece que o perfil que você está tentando deletar não é seu.");
    }else{
      await this.prisma.existUserId(id);
      return this.prisma.removeUser(id);
    }
  }
}
