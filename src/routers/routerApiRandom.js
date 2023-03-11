import { Router } from 'express';
import { Query } from 'mongoose';
import { controladorRandom } from '../controllers/controladorRandom.js';
import loggerMiddleware from '../utils/pino.js'

const routerApiRandom = Router();

routerApiRandom.get('/api/randoms', loggerMiddleware, controladorRandom)
 
export {routerApiRandom}