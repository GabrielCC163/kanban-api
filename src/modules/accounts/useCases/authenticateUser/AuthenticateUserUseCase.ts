import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  login: string;
  senha: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ login, senha }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(login);
    const { expires_in_token, token_secret } = auth;

    if (!user) {
      throw new AppError('Username or password incorrect!');
    }

    const passwordMatch = await compare(senha, user.password);

    if (!passwordMatch) {
      throw new AppError('Username or password incorrect!');
    }

    const token = sign({}, token_secret, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        username: user.username,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
