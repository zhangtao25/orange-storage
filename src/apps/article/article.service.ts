import { Inject, Injectable } from '@nestjs/common'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { Repository } from 'typeorm'
import { Article } from './entities/article.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ArticleService extends TypeOrmCrudService<Article> {
  constructor(@InjectRepository(Article, 'DATABASE_CONNECTION') repo) {
    super(repo)
  }
}
