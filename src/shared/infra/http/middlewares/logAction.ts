import dayjs from 'dayjs';
import { NextFunction, Request, Response } from 'express';

export async function logAction(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const { id } = req.body;
  const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
  console.log(
    `${date} - Card ${id} - ${req.body.titulo || JSON.stringify(req.body)} - ${
      req.method === 'PUT' ? 'Alterar' : 'Remover'
    }`
  );

  return next();
}
