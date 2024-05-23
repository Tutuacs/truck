import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient, Profile, Truck, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

}
