import { Router } from 'express';
import Controllers from '../controllers/Controllers';

const router = Router();

router.post('/sendData', Controllers.addData);

export default router;