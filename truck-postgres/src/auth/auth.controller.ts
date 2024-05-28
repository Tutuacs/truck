import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(202)
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }

  @Post('register')
  register(@Body() register: LoginDto) {
    return this.authService.register(register);
  }
}
