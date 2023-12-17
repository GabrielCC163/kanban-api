import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { Card } from '../../infra/typeorm/entities/Card';
import { CreateCardUseCase } from './CreateCardUseCase';

class CreateCardController {
  async handle(req: Request, res: Response): Promise<Response<Card>> {
    const { titulo, conteudo, lista } = req.body;
    const createCardUseCase = container.resolve(CreateCardUseCase);

    const createdCard = await createCardUseCase.execute({
      titulo,
      conteudo,
      lista,
    });

    return res.status(201).json(createdCard);
  }
}

export { CreateCardController };
