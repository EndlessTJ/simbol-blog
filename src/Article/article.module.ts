import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleController } from './article.controller';
import { ArticleSchema } from './schemas/article.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema}])],
  controllers: [ArticleController],
})
export class ArticleModule {}