import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common'
import { ArticleService } from './article.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'
import { Crud, CrudController } from '@nestjsx/crud'
import { Article } from './entities/article.entity'

@Crud({
  model: {
    type: Article,
  },
})
@Controller('article')
export class ArticleController implements CrudController<Article> {
  constructor(public service: ArticleService) {}
}
