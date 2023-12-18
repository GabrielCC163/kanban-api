import dayjs from 'dayjs';
import { NextFunction, Request, Response } from 'express';

import { CardsRepository } from '@modules/cards/infra/typeorm/repositories/CardsRepository';

export async function logAction(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const cardRepo = new CardsRepository();
  const card = await cardRepo.findById(id);
  const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
  console.log(
    `${date} - Card ${id} - ${card.titulo} - ${
      req.method === 'PUT' ? 'Alterar' : 'Remover'
    }`
  );

  return next();
}
