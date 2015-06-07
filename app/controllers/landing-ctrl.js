'use strict';

window.angular.module('BznsPlansApp').controller('LandingCtrl', function($scope, $state) {
	
	var categories = ['general-knowledge.holiday', 'sports', 'stocks', 'weather'];
	var currentCategoryIndex = 0;

	$scope.loadNextCategory = function() {
		currentCategoryIndex++;

		if(currentCategoryIndex == categories.length) {
			currentCategoryIndex = 0;
		}

		$state.go('categories.'+categories[currentCategoryIndex]);
	};
});