/*
* Author: abu.muslim.amr@gmail.com
* Summary: includes ng app dependencies and configurations
* */

(function () {
  'use strict';

  // Create app and include dependencies
  window.angular.module('BznsPlansApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);
  window.ngApp = window.angular.module('BznsPlansApp');

  window.ngApp.config(function () {

  });

  window.ngApp.run(function () {

  });


}());