import { getRepository, Repository } from 'typeorm';

import { ICreateCardDTO } from '@modules/cards/dtos/ICreateCardDTO';
import { ICardsRepository } from '@modules/cards/repositories/ICardsRepository';

import { Card } from '../entities/Card';

class CardsRepository implements ICardsRepository {
  private repository: Repository<Card>;

  constructor() {
    this.repository = getRepository(Card);
  }

  async findById(id: string): Promise<Card> {
    const card = await this.repository.findOne(id);
    return card;
  }

  async create({ titulo, conteudo, lista, id }: ICreateCardDTO): Promise<Card> {
    const card = this.repository.create({
      titulo,
      conteudo,
      lista,
      id,
    });

    await this.repository.save(card);
    return card;
  }

  async list(): Promise<Card[]> {
    const cards = await this.repository.find();
    return cards;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CardsRepository };
