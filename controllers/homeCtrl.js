'use strict';

// Home Page Controller
const homeCtrl = {
  index (req, res, next) {
    res.render('index', { title: 'Home Page' });
  }
}

export default homeCtrl;
