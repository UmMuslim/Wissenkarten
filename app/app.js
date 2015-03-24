'use strict';

// Create App
window.angular.module('WissenkartenApp', ['ui.router','ui.bootstrap', 'ngAnimate']);


window.angular.module('WissenkartenApp').run(function($rootScope) {
	$rootScope.loadBottomBar = true;
});