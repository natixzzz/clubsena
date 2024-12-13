import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule], // Asegúrate de que el módulo esté importado aquí
  controllers: [],
  providers: [],
})
export class AppModule {}
