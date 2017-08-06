'use strict';

import { createTransport } from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';
import configValues from './config';


const auth = {
  auth: {
    api_key: `${configValues.api_key}`,
    domain: `${configValues.domain}`
  }
}

const transporter = createTransport(mg(auth));

// Page Controller
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
      console.log('error', errors); // handle better
      return res.redirect('/contact');
    }

    const mailOptions = {
      from: req.body.name + ' ' + '<'+ req.body.email + '>',
      to: 'niklasoti@gmail.com',
      subject: '✔ Contact Form | Full Stack Boilerplate from',
      text: req.body.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err); // handle better
      } else {
        console.log('Sent: ' + info); // handle better
      }
      res.redirect('/contact');
    });
  }
}

export default contactCtrl;