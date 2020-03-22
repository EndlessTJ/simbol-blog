import {Controller, Get, Post, Put, Delete} from '@nestjs/common';


@Controller('article')
export class ArticleController{
  @Get()
  findArticleList():string{
    return '[1,2,3,4]'
  }
}