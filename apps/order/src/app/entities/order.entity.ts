import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAMES } from '@nx-trx/common';
import { IOrder } from '../interfaces/order.interface';

@Entity(TABLE_NAMES.ORDERS)
export class OrderEntity implements IOrder {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'int4',
    nullable: false
  })
  inventoryId: number;

  @Column({
    type: 'int4',
    nullable: false
  })
  count: number;

  @Column({
    type: 'int4',
    nullable: false
  })
  userId: number;
}
