import 'reflect-metadata';
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

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ login, senha }: IRequest): Promise<string> {
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

    return token;
  }
}

export { AuthenticateUserUseCase };
