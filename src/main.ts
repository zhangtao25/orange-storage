import { NestFactory } from '@nestjs/core'
import { configLog } from './utils'
import * as fs from 'fs'
import * as YAML from 'yaml'

async function bootstrap() {
  if (process.env.CUSTOM_ENV) {
    configLog({ type: 'main.ts', info: `当前环境为${process.env.CUSTOM_ENV}` })
    const conf = fs.readFileSync(
      `./conf/application.${process.env.CUSTOM_ENV}.yml`,
      'utf8',
    )
    configLog({
      type: 'main.ts',
      info: `读取conf/application.${process.env.CUSTOM_ENV}.yml`,
    })
    global.conf = YAML.parse(conf)
  } else {
    configLog({ type: 'main.ts', info: `当前环境为${process.env.DB_CONFIG}` })
    global.conf = JSON.parse(process.env.DB_CONFIG)
  }

  const { AppModule } = await import('./app.module')
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
