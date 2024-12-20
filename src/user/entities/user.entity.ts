import { UserRole } from 'src/permissions/enums/role.enum';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;
  
    @Column({ nullable: true })
    fullName?: string;
  
    @OneToMany(() => Workspace, (workspace) => workspace.user)
    workspaces: Workspace[];

    @Column({
      type: 'enum',
      enum: UserRole,
      default: UserRole.GUEST, 
    })
    role: UserRole;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  