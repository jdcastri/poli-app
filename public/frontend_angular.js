'use strict';

angular.module('GrassLeg', [
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'ngSanitize'
])

.config(function($routeProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')

  $routeProvider.when('/', {
    templateUrl: 'landingPage.html',
    controller: 'AppCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})

.controller("AppCtrl", function($scope, $document, $route, $http, $mdDialog) {
  $scope.personas = [
  {
    name: "Mary",
    age: "44",
    hometown: "Orlando, FL",
    profPic: 'cartoon1.jpg',
    bio: "Mary cares about her <b>childrens' school</b> and wants to make sure they are learning in the best environment possible. Her husband, Marco, plays way too much golf and she worries he's already thinking about <b>retirement</b>. Between her family and her part time Uber driving job, she <b>doesn't have too much time to devote to learning about politics</b>. Luckily, Poli is a quick, simple, and easy way for Mary to learn about what is happening in politics without taking vital time away from her family.",
    legislation: [
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
  }, {
    name: "John",
    age: "20",
    hometown: "Miami, FL",
    profPic: "cartoon2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    legislation: [
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
    }]
  }, {
    name: "Bro-gan",
    age: "20",
    hometown: "Miami, FL",
    profPic: "cartoon3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    legislation: [
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
    }]
  }];
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

  $scope.submitEmail = function() {
    if ($scope.email) {

      $http.post('/newEmail', {email: $scope.email})
        .then(function() {
          var alert = $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Thank you!')
              .textContent('We will keep you posted on the development of our applications. Together, we are confident we change the way people engage with legislation.')
              .ariaLabel('Email Submitted')
              .ok('Close');
          $mdDialog.show(alert)
            .finally(function() {
              $route.reload();
            });
        });
    }
  }
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