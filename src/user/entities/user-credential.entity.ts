import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({
  
})
export class UserCredential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  lastLoginAt: Date;

  //   @Column('json', { default: [null, null]})
  //   lastLocationAt: [string, string];

  @Column('varchar', {
    transformer: {
      from: (value) => JSON.parse(value),
      to: (value) => JSON.stringify(value),
    },
  })
  lastLocationAt: [string, string];

  @Column('json')
  devicesTrusted: string[];

  @OneToOne((type) => UserCredential)
  user: User;
}
