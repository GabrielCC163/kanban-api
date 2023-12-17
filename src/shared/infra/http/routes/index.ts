import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { cardsRoutes } from './cards.routes';

const router = Router();

router.use('/cards', cardsRoutes);
router.use(authenticateRoutes);

export { router };
