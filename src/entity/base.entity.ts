import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class Base {
    @PrimaryGeneratedColumn()
    uid: number;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @Column({
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
  
    @Column({type: 'boolean'})
    isDeleted: Boolean
}