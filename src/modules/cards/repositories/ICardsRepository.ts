import { ICreateCardDTO } from '../dtos/ICreateCardDTO';
import { Card } from '../infra/typeorm/entities/Card';

interface ICardsRepository {
  findById(id: string): Promise<Card>;
  create(data: ICreateCardDTO): Promise<Card>;
  list(): Promise<Card[]>;
  deleteById(id: string): Promise<void>;
}

export { ICardsRepository };
