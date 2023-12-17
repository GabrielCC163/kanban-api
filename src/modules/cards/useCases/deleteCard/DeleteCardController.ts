import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Card } from '@modules/cards/infra/typeorm/entities/Card';

import { DeleteCardUseCase } from './DeleteCardUseCase';

class DeleteCardController {
  async handle(req: Request, res: Response): Promise<Response<Card[]>> {
    const { id } = req.params;
    const deleteCardUseCase = container.resolve(DeleteCardUseCase);
    const cards = await deleteCardUseCase.execute(id);
    return res.json(cards);
  }
}

export { DeleteCardController };
