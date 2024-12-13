import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(loginDto: { email: string; password: string }) {
    console.log('Datos recibidos:', loginDto);

    const { email, password } = loginDto;
    if (email === 'test@domain.com' && password === 'password123') {
      return { message: 'Login exitoso' };
    }

    throw new Error('Credenciales inválidas');
  }
}
