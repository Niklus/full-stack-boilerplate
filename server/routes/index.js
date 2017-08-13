'use strict';

import { Router } from 'express';
import todoCtrl from '../controllers/todoCtrl';
import homeCtrl from '../controllers/homeCtrl';
import contactCtrl from '../controllers/contactCtrl';
import userCtrl from '../controllers/userCtrl';

const router = Router();

/* Index Route */
router.get('/', homeCtrl.home); // if (index.html in client) '/' route reserved for the static html
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


/* User routes 
router.get('/account', userCtrl.ensureAuthenticated, userCtrl.accountGet);
router.put('/account', userCtrl.ensureAuthenticated, userCtrl.accountPut);
router.delete('/account', userCtrl.ensureAuthenticated, userCtrl.accountDelete);
router.get('/signup', userCtrl.signupGet);
router.post('/signup', userCtrl.signupPost);
router.get('/login', userCtrl.loginGet);
router.post('/login', userCtrl.loginPost);
router.get('/forgot', userCtrl.forgotGet);
router.post('/forgot', userCtrl.forgotPost);
router.get('/reset/:token', userCtrl.resetGet);
router.post('/reset/:token', userCtrl.resetPost);
router.get('/logout', userCtrl.logout);
router.get('/unlink/:provider', userCtrl.ensureAuthenticated, userCtrl.unlink);*/


export default router;
