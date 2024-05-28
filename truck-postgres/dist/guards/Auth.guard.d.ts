import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ProfileFunctions } from 'src/profile/functions/profile.filter';
export declare class AuthGuard implements CanActivate {
    private readonly authService;
    private readonly profileFunctions;
    constructor(authService: AuthService, profileFunctions: ProfileFunctions);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
