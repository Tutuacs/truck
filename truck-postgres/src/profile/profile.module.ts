import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { AuthModule } from 'src/auth/auth.module';
import { ProfileAbstract } from './functions/profile-abstract';
import { ProfileFunctions } from './functions/profile.filter';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [ProfileController],
  providers: [ProfileService, 
    {
      provide: ProfileAbstract,
      useClass: ProfileFunctions,
    }
  ],
})
export class ProfileModule {}
