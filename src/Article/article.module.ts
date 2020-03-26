import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleController } from './article.controller';
import { ArticleSchema } from './schemas/article.schema';
import { TagsSchema } from './schemas/tags.schema'
import { ArticleService } from './article.service'


@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Article', schema: ArticleSchema},
    { name: 'Tags', schema: TagsSchema},
  ])],
  controllers: [ArticleController],
  providers:[ArticleService]
})
export class ArticleModule {}