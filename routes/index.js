
import { Router } from 'express';
import todoCtrl from '../controllers/todoCtrl';
import pageCtrl from '../controllers/pageCtrl';

const router = Router();

/* Page Routes */
router.get('/', pageCtrl.index);
router.get('/about', pageCtrl.about);

/* Todos Api routes*/
router.get('/api/todos/:uname', todoCtrl.getByName);
router.get('/api/todo/:id', todoCtrl.getById);
router.post('/api/todo', todoCtrl.addTodo);
router.delete('/api/todo', todoCtrl.deleteTodo);
router.post('/api/todos/setup', todoCtrl.setupTodos);

export default router;
