import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';

import { TagPost } from './tag-post.model';
import { Post } from './post.model';

@Table({ tableName: 'tags', underscored: true })
export class Tag extends Model<Tag> {
  @Column({ unique: true, allowNull: false })
  titleName: string;

  @BelongsToMany(() => Post, () => TagPost)
  posts: Post[];
}
