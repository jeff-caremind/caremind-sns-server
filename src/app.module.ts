import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { FeedModule } from './domain/service/module/feed.module';
import { UserModule } from './domain/service/module/user.module';
import { ProfileModule } from './domain/service/module/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    FeedModule,
    UserModule,
    ProfileModule,
  ],
})
export class AppModule {}
