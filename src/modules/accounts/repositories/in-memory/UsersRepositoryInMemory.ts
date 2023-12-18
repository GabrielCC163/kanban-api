import { User } from '@modules/accounts/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [
    {
      id: '35caf017-beb0-4662-8bea-e67eccfa18d9',
      name: 'admin',
      username: 'letscode',
      password: '$2b$08$9FYxhfAPp4ICZcF6DIbzNO6.Q64ieOSKsyn.HESUQFiFzi8FkMi3i',
      created_at: new Date(),
    },
  ];

  async findByUsername(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}

export { UsersRepositoryInMemory };
