import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CardsRepository } from '@modules/cards/infra/typeorm/repositories/CardsRepository';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICardsRepository>(
  'CardsRepository',
  CardsRepository
);
