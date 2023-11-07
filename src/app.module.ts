import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedModule } from './domain/service/module/feed.module';
import { UserModule } from './domain/service/module/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '12h' },
    }),
    FeedModule,
    UserModule,
  ],
})
export class AppModule {}
