import { Injectable } from '@nestjs/common';
import { ProfileVerify } from './profile-exist.filter';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { ProfileAbstract } from './profile-abstract';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileFunctions extends ProfileVerify implements ProfileAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createProfile(data: CreateProfileDto) {
    return this.prisma.profile.create({ data });
  }

  findProfile(id: string) {
    return this.prisma.profile.findUnique({
      where: { id },
    });
  }

  profileInfo(user: { id: string; userId: string }) {
    return this.prisma.profile.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        email: true,
        role: true,
        image: true,
        User: {
          select: {
            id: true,
            name: true,
            Trucks: {
              select: {
                id: true,
                name: true,
              },
            },
            document: true,
            email: true,
            Order: true,
          },
        },
      },
    });
  }

  listProfile() {
    return this.prisma.profile.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        userId: true,
        image: true,
      },
    });
  }

  updateProfile(id: string, data: UpdateProfileDto) {
    return this.prisma.profile.update({ where: { id }, data });
  }

  removeProfile(id: string) {
    return this.prisma.profile.delete({ where: { id } });
  }

  async exProfileEmail(email: string): Promise<Boolean> {
    return Boolean(await this.prisma.profile.count({ where: { email } }));
  }
}
