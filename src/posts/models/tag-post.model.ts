import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';

import { Post } from './post.model';
import { Tag } from './tag.model';

@Table({ tableName: 'tags_posts', timestamps: true, underscored: true })
export class TagPost extends Model<TagPost> {
  @ForeignKey(() => Post)
  @Column({ allowNull: false })
  postId: number;

  @ForeignKey(() => Tag)
  @Column({ allowNull: false })
  tagId: number;
}
