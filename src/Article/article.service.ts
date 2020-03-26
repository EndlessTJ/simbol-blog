import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface'

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>){

  }

 

}
