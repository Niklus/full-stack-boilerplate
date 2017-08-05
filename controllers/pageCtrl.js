'use strict';

// Page Controller
const pageCtrl = {
  
  index (req, res, next) {
    res.render('index', { title: 'Home Page' });
  },

  about (req, res, next) {
    res.render('about', { title: 'About' });
  }
}

export default pageCtrl;