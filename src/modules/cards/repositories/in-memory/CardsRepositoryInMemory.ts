import { ICreateCardDTO } from '@modules/cards/dtos/ICreateCardDTO';
import { Card } from '@modules/cards/infra/typeorm/entities/Card';

import { ICardsRepository } from '../ICardsRepository';

class CardsRepositoryInMemory implements ICardsRepository {
  cards: Card[] = [];

  async findById(id: string): Promise<Card> {
    return this.cards.find((card) => card.id === id);
  }

  async create({ titulo, conteudo, lista }: ICreateCardDTO): Promise<Card> {
    const card = new Card();

    Object.assign(card, {
      titulo,
      conteudo,
      lista,
    });

    this.cards.push(card);
    return card;
  }

  async list(): Promise<Card[]> {
    const all = this.cards;
    return all;
  }

  async deleteById(id: string): Promise<void> {
    const card = this.cards.find((c) => c.id === id);

    this.cards.splice(this.cards.indexOf(card));
  }
}

export { CardsRepositoryInMemory };
