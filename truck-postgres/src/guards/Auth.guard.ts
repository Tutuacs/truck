import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfileFunctions } from 'src/profile/functions/profile.filter';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly profileFunctions: ProfileFunctions,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = await this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );

      request.token = data;

      request.profile = await this.profileFunctions.createProfile(data.id);

      return true;
    } catch {
      return false;
    }
  }
}
