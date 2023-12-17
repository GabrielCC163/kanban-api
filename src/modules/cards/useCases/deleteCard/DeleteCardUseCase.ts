import { inject, injectable } from 'tsyringe';

import { Card } from '@modules/cards/infra/typeorm/entities/Card';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';

@injectable()
class DeleteCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) {}

  async execute(id: string): Promise<Card[]> {
    await this.cardsRepository.deleteById(id);
    return this.cardsRepository.list();
  }
}

export { DeleteCardUseCase };
