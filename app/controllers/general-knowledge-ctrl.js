'use strict';

window.angular.module('WissenkartenApp').controller('GeneralKnowledgeCtrl', function($scope, $state) {
	
	var cards = ['holiday', 'president', 'question'];
	var currentCardIndex = 0;

	function loadCard(index) {
		$state.go('categories.general-knowledge.'+cards[index]);
	}

	$scope.loadNextCard = function() {
		currentCardIndex++;

		if(currentCardIndex == cards.length) {
			currentCardIndex = 0;
		}

		loadCard(currentCardIndex);
	};

	$scope.loadPrevCard = function() {
		currentCardIndex--;

		if(currentCardIndex == -1) {
			currentCardIndex = cards.length - 1;
		}

		loadCard(currentCardIndex);
	};
});