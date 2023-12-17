import { Router } from 'express';

import { CreateCardController } from '@modules/cards/useCases/createCard/CreateCardController';
import { DeleteCardController } from '@modules/cards/useCases/deleteCard/DeleteCardController';
import { ListCardsController } from '@modules/cards/useCases/listCards/ListCardsController';
import { UpdateCardController } from '@modules/cards/useCases/updateCard/UpdateCardController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { logAction } from '@shared/infra/http/middlewares/logAction';

const cardsRoutes = Router();

const createCardController = new CreateCardController();
const listCardsController = new ListCardsController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();

cardsRoutes.get('/', ensureAuthenticated, listCardsController.handle);

cardsRoutes.post('/', ensureAuthenticated, createCardController.handle);

cardsRoutes.put(
  '/:id',
  ensureAuthenticated,
  logAction,
  updateCardController.handle
);

cardsRoutes.delete(
  '/:id',
  ensureAuthenticated,
  logAction,
  deleteCardController.handle
);

export { cardsRoutes };
