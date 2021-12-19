import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('article')
export class Article extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '名字',
  })
  name: string
}
