
import { Router } from 'express';
import todoController from '../controllers/todoController';
import pageController from '../controllers/pageController';

const router = Router();

/* Page Routes */
router.get('/', pageController.homePage);
router.get('/about', pageController.aboutPage);

/* Todos Api routes*/
router.get('/todos/:uname', todoController.getByName);
router.get('/todo/:id', todoController.getById);
router.post('/todo', todoController.addTodo);
router.delete('/todo', todoController.deleteTodo);
router.post('/todos/setup', todoController.setupTodos);

export default router;
