import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './Validation/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly service: AuthService){}

    @Post('login')
    @HttpCode(202)
    login(@Body() login: LoginDto) {
      return this.service.login(login);
    }
  
    @Post('register')
    register(@Body() register: LoginDto) {
      return this.service.register(register);
    }
}
