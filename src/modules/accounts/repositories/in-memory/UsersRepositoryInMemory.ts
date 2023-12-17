import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async findByUsername(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}

export { UsersRepositoryInMemory };
