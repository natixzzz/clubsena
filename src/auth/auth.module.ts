import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController], // Asegúrate de incluir el controlador aquí
  providers: [AuthService],      // Asegúrate de incluir el servicio aquí
})
export class AuthModule {}
