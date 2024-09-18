import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAMES, LENGTH_CONSTRAINTS } from '@nx-trx/common';
import { IPayment } from '../interfaces/payment.interface';

@Entity(TABLE_NAMES.PAYMENTS)
export class PaymentEntity implements IPayment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'int4',
    nullable: false,
  })
  orderId: number;

  @Column({
    type: 'int4',
    nullable: false,
  })
  userId: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: LENGTH_CONSTRAINTS.STATUS
  })
  status: string;
}
