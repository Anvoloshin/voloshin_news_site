import { Table, Column, Model, HasMany } from 'sequelize-typescript';

import { Post } from '../posts/models/post.model';

@Table({ tableName: 'users', timestamps: true, underscored: true })
export class User extends Model<User> {
  @Column({ allowNull: false })
  login: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column
  avatarUrl: string;

  @HasMany(() => Post)
  posts: Post[];
}
