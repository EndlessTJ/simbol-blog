import { Module } from '@nestjs/common';
import { ArticleModule } from './Article/article.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/SIMBOL_BLOG'), ArticleModule],
})
export class AppModule {}
