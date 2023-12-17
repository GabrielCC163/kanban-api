import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  findByUsername(username: string): Promise<User>;
}

export { IUsersRepository };
