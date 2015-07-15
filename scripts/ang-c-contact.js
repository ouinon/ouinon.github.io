    angular.module('ouinonApp')
      .controller('FormController', ['$scope','$http', function($scope,$http) {
        
        // $scope.userType = 'guest';

        $scope.user = {};
        $scope.messagesent = false;
        $scope.messagelabel = 'Send Message';

        // console.log($scope.form);

        $scope.sendForm = function(form){

        	// Can't use Angular's $http here and the form data must be have Content-Type:application/x-www-form-urlencoded
        	$.ajax({
        	    url: "//formspree.io/robert@ouinon.co", 
        	    method: "POST",
        	    data: form,
        	    dataType: "json"
        	}).success(function(){

        		$scope.messageheader = 'Thanks for getting in touch, I\'ll get back to you quick as I can.';
		        
		        $scope.message = 'Message Sent';

				$scope.messagesent = true;

				$scope.contact.$setPristine();

        		$scope.$apply(function(){
        			$scope.user = {};
        		});

        		console.log($scope.user);

        	});

        };

      }]);

    angular.module('ouinonApp')
        .directive('oInput', function () {
            return {
              template:
                    '<div class="o-input" class="{{classList}}" ng-class="{\'focus\':focus}">'+
                        '<input required name="{{name}}" ng-pattern="pattern" ng-disabled="disabled" ng-model="inpModel" ng-dirty="dirty=1" ng-valid="valid=1" ng-focus="focus=1" ng-blur="focus=0" type="text" placeholder="{{placeholder}}">'+
                        '<ng-transclude></ng-transclude>'+
                    '</div>',
              replace:true,
              restrict: 'E',
              transclude:true,
              scope:{
                inpModel:'=ngModel',
                disabled:'=ngDisabled',
                placeholder:'@',
                pattern:'@ngPattern',
                name:'@',
                classList:'@class'
              },
              link:function(scope,element){
                // alert('ho');
                console.log(scope,element);
              }
            };
        });

    angular.module('ouinonApp')
        .directive('oTextarea', function () {
            return {
              template:
                    '<div class="o-input" class="{{classList}}" ng-class="{\'focus\':focus,\'dirty\':dirty,\'valid\':valid}">'+
                        '<textarea required name="{{name}}" ng-disabled="disabled" ng-model="inpModel" ng-dirty="dirty=1" ng-valid="valid=1" ng-focus="focus=1" ng-blur="focus=0" type="text" placeholder="{{placeholder}}"></textarea>'+
                        '<ng-transclude></ng-transclude>'+
                    '</div>',
              replace:true,
              restrict: 'E',
              transclude:true,
              scope:{
                inpModel:'=ngModel',
                disabled:'=ngDisabled',
                placeholder:'@',
                name:'@',
                classList:'@class'
              },
              link:function(scope,element){
                // alert('ho');
                console.log(scope,element);
              }
            };
        });