import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Card } from '../../infra/typeorm/entities/Card';
import { UpdateCardUseCase } from './UpdateCardUseCase';

class UpdateCardController {
  async handle(req: Request, res: Response): Promise<Response<Card>> {
    const { id } = req.body;
    const { titulo, conteudo, lista } = req.body;
    const data = {
      titulo,
      conteudo,
      lista,
    };

    const updateCardUseCase = container.resolve(UpdateCardUseCase);
    const updatedCard = await updateCardUseCase.execute(id, data);

    return res.status(200).json(updatedCard);
  }
}

export { UpdateCardController };
