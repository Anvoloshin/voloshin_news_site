import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';

import { User } from '../../users/user.model';

import { Tag } from './tag.model';
import { TagPost } from './tag-post.model';

@Table({ tableName: 'posts', timestamps: true, underscored: true })
export class Post extends Model<Post> {
  @Column({ allowNull: false })
  title: string;

  @Column({ allowNull: false })
  description: string;

  @Column
  imageUrl: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Tag, () => TagPost)
  tag: Tag[];
}
