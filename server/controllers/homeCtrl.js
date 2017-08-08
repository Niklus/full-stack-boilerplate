'use strict';

// Home Page
const homeCtrl = {
  home (req, res, next) {
    res.render('home', { title: 'Server Home Page' });
  }
}

export default homeCtrl;
