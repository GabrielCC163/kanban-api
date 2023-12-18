import { inject, injectable } from 'tsyringe';

import { Card } from '@modules/cards/infra/typeorm/entities/Card';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) {}

  async execute(id: string): Promise<Card[]> {
    const card = await this.cardsRepository.findById(id);
    if (!card) throw new AppError('Card not found', 404);
    await this.cardsRepository.deleteById(id);
    return this.cardsRepository.list();
  }
}

export { DeleteCardUseCase };
