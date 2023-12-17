import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
  });

  it('should be able to authenticate a user', async () => {
    const result = await authenticateUserUseCase.execute({
      login: 'letscode',
      senha: 'lets@123',
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate a non existent user', async () => {
    await expect(
      authenticateUserUseCase.execute({
        login: 'wronguserlogin',
        senha: 'abc123',
      })
    ).rejects.toEqual(new AppError('Username or password incorrect!'));
  });

  it('should not be able to authenticate with incorrect password', async () => {
    await expect(
      authenticateUserUseCase.execute({
        login: 'letscode',
        senha: 'incorrectPassword',
      })
    ).rejects.toEqual(new AppError('Username or password incorrect!'));
  });
});
