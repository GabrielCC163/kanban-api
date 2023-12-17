import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Card } from '../../infra/typeorm/entities/Card';
import { ListCardsUseCase } from './ListCardsUseCase';

class ListCardsController {
  async handle(req: Request, res: Response): Promise<Response<Card[]>> {
    const listCardsUseCase = container.resolve(ListCardsUseCase);
    const all = await listCardsUseCase.execute();
    return res.json(all);
  }
}

export { ListCardsController };
