import { inject, injectable } from 'tsyringe';

import { Card } from '@modules/cards/infra/typeorm/entities/Card';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';

@injectable()
class ListCardsUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) {}

  async execute(): Promise<Card[]> {
    const cards = await this.cardsRepository.list();
    return cards;
  }
}

export { ListCardsUseCase };
