import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TABLE_NAMES } from '@nx-trx/common';
import { Inventory } from '../interfaces/inventory.interface';


@Entity(TABLE_NAMES.INVENTORIES)
export class InventoryEntity implements Inventory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    nullable: false
  })
  name: string;

  @Column({
    type: 'int4',
    nullable: false
  })
  totalCount: number;
}
