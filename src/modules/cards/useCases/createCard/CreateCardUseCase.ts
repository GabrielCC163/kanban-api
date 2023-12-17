import { inject, injectable } from 'tsyringe';

import { ICreateCardDTO } from '@modules/cards/dtos/ICreateCardDTO';
import { Card } from '@modules/cards/infra/typeorm/entities/Card';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';

@injectable()
class CreateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) {}

  async execute({ titulo, conteudo, lista }: ICreateCardDTO): Promise<Card> {
    const createdCard = await this.cardsRepository.create({
      titulo,
      conteudo,
      lista,
    });

    return createdCard;
  }
}

export { CreateCardUseCase };
