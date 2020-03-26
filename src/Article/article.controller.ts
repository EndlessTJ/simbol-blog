import {Controller, Get, Post, Put, Req} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Request } from 'express';


@Controller('article')
export class ArticleController{
  constructor(private articleService: ArticleService){

  }
  // 获取文章列表
  @Get('apicomm001')
  findArticleList(@Req() request: Request ){
    console.log(request)
    return 'this is request'
  }

  // 获取文章内容（前后台通用）
  @Get('apicomm002')
  findArticle():string {
    return 'false';
  }

  // 获取标签列表（后台）
  @Get('apiadm001')
  findTags(): string[]{
    return ['']
  }

  // 添加后台文章
  @Post('apiadm002')
  createArticle(@Req() request: Request ){
    return ''
  }

  // 修改文章
  @Post('apiadm003')
  updateArticle(){
    return ''
  }
}