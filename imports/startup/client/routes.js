/*jshint esversion: 6 */

import { Router } from 'meteor/iron:router';

Router.route('/', function() {
    this.render('home');
});


Router.route('/experiment', function() {
    this.render('experiment');
});

Router.route('/survey', function() {
    this.render('survey');
});
