import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryColumn()
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ type: 'float', default: 0 })
  progress: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
