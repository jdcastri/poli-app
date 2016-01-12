'use strict';

angular.module('GrassLeg', [
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'smoothScroll'
])

.config(function($routeProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')

  $routeProvider.when('/', {
    templateUrl: 'landingPage.html',
    controller: 'AppCtrl'
  });
})

.controller("AppCtrl", function($scope, $document, smoothScroll) {
  $scope.legislation = {
    "Gun Control": [
    {
      name: "Assault Weapons Ban of 2015",
      description: "To regulate assault weapons, to ensure that the right to keep and bear arms is not unlimited, and for other purposes.",
      date: '12/16/15'
    },
    {
      name: "No Guns for Terrorists Act of 2015",
      description: "To amend title 18, United States Code, to prohibit the sale of firearms to individuals suspected of terrorism, and for other purposes.",
      date: '11/18/15'
    },
    {
      name: "Reducing Gun Violence in our Neighborhoods Act of 2015",
      description: "To reduce gun violence, increase mental health counseling, and enhance the tracking of lost and stolen firearms.",
      date: '10/26/15'
    }],
    "Civil Rights" : [
    {
      name: "H.Res.569",
      description: "Condemning violence, bigotry, and hateful rhetoric towards Muslims in the United States.",
      date: '12/17/15'
    },
    {
      name: "Pay Workers a Living Wage Act",
      description: "A bill to provide for increases in the Federal minimum wage.",
      date: '07/22/15'
    }, {
      name: "End Modern Slavery Initiative Act of 2015",
      description: "A bill to marshal resources to undertake a concerted, transformative effort that seeks to bring an end to modern slavery, and for other purposes.",
      date: '02/24/15'
    }],
    "Immigration Policy" : [
    {
      name: "Visa Waiver Program Improvement and Terrorist Travel Prevention Act of 2015",
      description: "To amend the Immigration and Nationality Act to provide enhanced security measures for the visa waiver program, and for other purposes.",
      date: "01/06/15"
    },
    {
      name: "American Security Against Foreign Enemies Act of 2015",
      description: "To require that supplemental certifications and background investigations be completed prior to the admission of certain aliens as refugees, and for other purposes.",
      date: '11/17/15'
    }]
  };

  $scope.topic_value = "Gun Control";

  $scope.goToBottom = function() {
    var target = document.getElementById('legislation-container');
    smoothScroll(target);
  };
})

.directive('focus',
  function($timeout) {
    return {
      scope : {
        trigger : '@focus'
      },
      link : function(scope, element) {
        scope.$watch('trigger', function(value) {
          if (value === "true") {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
});