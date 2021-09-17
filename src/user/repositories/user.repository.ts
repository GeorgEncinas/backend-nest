import { UnauthorizedException } from '@nestjs/common';
import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string) {
    const userQb: SelectQueryBuilder<User> = this.createQueryBuilder('user').leftJoinAndSelect(
      'user.credential',
      'credential',
    );

    userQb.andWhere('credential.email = :email', { email });

    const userFound  = await userQb.getOne();

    if (userFound) {
      return userFound;
    } else {
      throw new UnauthorizedException(`Invalid ${email}`);
    }
  }

  async createUser() {
    const newUser: User = {} as User;
    const userCreated = this.create(newUser);
    const userSaved = await userCreated.save();
    console.log(userSaved);
    return userSaved;
  }
}
