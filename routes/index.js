
import { Router } from 'express';
import todoController from '../controllers/todoController';
import pageController from '../controllers/pageController';

const router = Router();

/* Page Routes */
router.get('/', pageController.homePage);
router.get('/about', pageController.aboutPage);

/* Todos Api routes*/
router.get('/api/todos/:uname', todoController.getByName);
router.get('/api/todo/:id', todoController.getById);
router.post('/api/todo', todoController.addTodo);
router.delete('/api/todo', todoController.deleteTodo);
router.post('/api/todos/setup', todoController.setupTodos);

export default router;
