// A very simple directive to add '_blank' to any external URLs.

angular.module('ouinonApp').directive('a', function(strHost) {
	return {
		restrict: 'E',
		link: function(scope, elem) {

			var a = elem[0];

			if(strHost !== a.hostname){

				a.target = '_blank';

			};

		}
	}
});