import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleController } from './Article/article.controller'
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
