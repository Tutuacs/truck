import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserAbstract } from './functions/user-abstract';
import { Role } from 'src/decorators';

@Injectable()
export class UserService {
  constructor(private readonly userFunctions: UserAbstract) {}

  // create(data: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return this.userFunctions.listUser();
  }

  findOne(id: string, user: { role: Role; id: string; userId: string }) {
    if (user.role !== Role.Admin && user.userId !== id) {
      throw new UnauthorizedException(
        "You don't have permission to access this resource",
      );
    }
    return this.userFunctions.findUser(id);
  }

  findByProfile(id: string, user: { role: Role; id: string; userId: string }) {
    if (user.role !== Role.Admin && user.id !== id) {
      throw new UnauthorizedException(
        "You don't have permission to access this resource",
      );
    }
    return this.userFunctions.findByProfile(id);
  }

  update(
    id: string,
    data: UpdateUserDto,
    user: { role: Role; id: string; userId: string },
  ) {
    if (user.role !== Role.Admin && user.userId !== id) {
      throw new UnauthorizedException(
        "You don't have permission to access this resource",
      );
    }
    return this.userFunctions.updateUser(id, data);
  }

  // remove(id: string) {
  //   return `This action removes a #${id} user`;
  // }
}
