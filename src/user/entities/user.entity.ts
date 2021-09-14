import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RecoveryMethod } from './recovery-method.entity';
import { UserCredential } from './user-credential.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ci: string;

  @Column()
  birthDay: Date;

  @Column()
  phoneContact: number;

  @Column()
  is_premium: boolean;

  @OneToOne((type) => UserCredential)
  @JoinColumn({
      name: 'user_credential_id'
  })
  credential: UserCredential;

  //   @Column('longtext', {
  //       default: [],
  //       transformer: {
  //           from: (value) => JSON.parse(value),
  //           to: (value) => JSON.stringify(value)
  //       }
  //   })
  @OneToMany((type) => RecoveryMethod, (recoveryMethod) => recoveryMethod.user)
  @JoinColumn()
  recoveryMethods: RecoveryMethod[];
}


