import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LENGTH_CONSTRAINTS, TABLE_NAMES } from '@nx-trx/common';
import { IUser } from '../interfaces/user.interfaces';

@Entity(TABLE_NAMES.USERS)
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: LENGTH_CONSTRAINTS.name
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: LENGTH_CONSTRAINTS.email
  })
  email: string;
}
