import { Connection } from 'typeorm'
import { Article } from '../entities/article.entity'

export const articleProviders = [
  {
    provide: 'DATABASE_CONNECTION_ArticleRepository',
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: ['DATABASE_CONNECTION'],
  },
]
