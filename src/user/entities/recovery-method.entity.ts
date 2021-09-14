import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RecoveryMethod {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  question: string;

  @Column()
  response: string;

  @ManyToOne((type) => User)
  user: User;
}
