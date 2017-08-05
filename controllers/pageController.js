'use strict';

// Page Controller
const pageController = {
  homePage (req, res, next){
    res.render('index', { title: 'Home Page' });
  },

  aboutPage(req, res, next) {
    res.render('about', { title: 'About' });
  }
}

export default pageController;