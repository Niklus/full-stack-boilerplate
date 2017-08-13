'use strict';

import { createTransport } from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.load();


const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
}

const transporter = createTransport(mg(auth));

// Contact Controller
const contactCtrl = {
  
  contactPage (req, res, next) {
    res.render('contact', { title: 'Contact Page' });
  },

  contactPost (req, res) {
    
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('message', 'Message cannot be blank').notEmpty();
    req.sanitize('email').normalizeEmail({ remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
      req.flash('error', errors);
      console.log('error', errors);
      res.redirect('/contact');
      return;
    }

    const mailOptions = {
      from: req.body.name + ' ' + '<'+ req.body.email + '>',
      to: 'niklasoti@gmail.com',
      subject: '✔ Contact Form | Full Stack Boilerplate',
      text: req.body.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err); // handle better
      } else {
        req.flash('success', { msg: 'Thank you! Your feedback has been submitted.' });
        console.log('Sent: ' + info); // handle better
      }
      res.redirect('/contact');
    });

    /**
     * req.validationErrors() may be removed in a future version. 
     * Use req.getValidationResult() instead
     * req.getValidationResult().then( result => {});*/
  }
}

export default contactCtrl;
