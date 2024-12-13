import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // El POST en /auth/login
  login(@Body() loginDto: { email: string; password: string }) {
    console.log('Login attempt:', loginDto);
    return this.authService.login(loginDto);
  }
}
