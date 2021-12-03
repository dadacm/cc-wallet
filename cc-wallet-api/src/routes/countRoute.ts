import { Router } from "express";
const countController = require('../controllers/countController')

export const countRouter = Router();

countRouter.post('/', countController.addCount);
countRouter.get('/', countController.getAllCounts);
countRouter.delete('/:id', countController.deleteById);