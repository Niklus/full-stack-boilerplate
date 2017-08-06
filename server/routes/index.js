'use strict';

import { Router } from 'express';
import todoCtrl from '../controllers/todoCtrl';
import homeCtrl from '../controllers/homeCtrl';
import contactCtrl from '../controllers/contactCtrl';

const router = Router();

/* Index Route */
router.get('/home', homeCtrl.home);

/* Contact Routes */
router.get('/contact', contactCtrl.contactPage);
router.post('/contact', contactCtrl.contactPost);


/* Todos Api routes*/
router.get('/api/todos/:uname', todoCtrl.getByName);
router.get('/api/todo/:id', todoCtrl.getById);
router.post('/api/todo', todoCtrl.addTodo);
router.delete('/api/todo', todoCtrl.deleteTodo);
router.post('/api/todos/setup', todoCtrl.setupTodos);

export default router;
