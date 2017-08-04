import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

export default router;
