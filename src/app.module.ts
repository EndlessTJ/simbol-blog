import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './Article/article.module'
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/SIMBOL_BLOG'), ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
