import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import configuration from '../config/configuration';
import { jwtConstants } from './constants';

@Module({
  imports: [UsersModule,JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' }
    }),],
  providers: [AuthService,AuthResolver],
})
export class AuthModule {}