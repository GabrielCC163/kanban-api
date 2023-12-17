import { inject, injectable } from 'tsyringe';

import { Card } from '@modules/cards/infra/typeorm/entities/Card';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  titulo?: string;
  conteudo?: string;
  lista?: string;
}

@injectable()
class UpdateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) {}

  async execute(
    id: string,
    { titulo, conteudo, lista }: IRequest
  ): Promise<Card> {
    const card = await this.cardsRepository.findById(id);
    if (!card) throw new AppError('Card not found', 404);
    const updatedCard = await this.cardsRepository.create({
      titulo,
      conteudo,
      lista,
      id,
    });
    return updatedCard;
  }
}

export { UpdateCardUseCase };
