import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { FeedModule } from './domain/service/module/feed.module';
import { UserModule } from './domain/service/module/user.module';
import { ProfileModule } from './domain/service/module/profile.module';
import { ConnectionModule } from './domain/service/module/connection.module';
import { AuthModule } from './domain/service/module/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    AuthModule,
    FeedModule,
    UserModule,
    ProfileModule,
    ConnectionModule,
  ],
})
export class AppModule {}
