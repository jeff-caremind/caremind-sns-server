import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FeedModule } from './domain/service/module/feed.module';
import { UserModule } from './domain/service/module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    FeedModule,
    UserModule,
  ],
})
export class AppModule {}
