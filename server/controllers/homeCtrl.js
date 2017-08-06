'use strict';

// Home Page
const homeCtrl = {
  home (req, res, next) {
    res.render('home', { title: 'Home Page' });
  }
}

export default homeCtrl;
