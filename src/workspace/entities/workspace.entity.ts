import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  password?: string;

  @Column('json', { nullable: true })
  tools?: Record<string, any>; 

  @Column({ default: true })
  isDefault: boolean;

  @ManyToOne(() => User, (user) => user.workspaces, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Project, (project) => project.workspace, { cascade: true })
  projects: Project[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
