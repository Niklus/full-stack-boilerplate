'use strict';

// Home Page Controller
const homeCtrl = {
  
  index (req, res, next) {
    res.render('index', { title: 'Home Page' });
  },

  about (req, res, next) {
    res.render('index', { title: 'About Section' });
  }
}

export default homeCtrl;
