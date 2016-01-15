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
    profPic: 'cartoon1.png',
    bio: "Mary's husband, Marco, plays way too much golf and she worries he's already thinking about retirement. Between her family and her part time Uber driving job, she doesn't have too much time to devote to learning about politics. Luckily, Poli is a quick, simple, and easy way for Mary to learn about what is happening in politics without taking vital time away from her family.",
    legislation: [
    {
      name: "Every Student Succeeds Act",
      description: "The bill gives states more flexibility and responsibility for developing accountability systems, deciding how federally required tests should be weighed, selecting additional measures of student and school performance, and implementing teacher evaluation systems." +
                    "The bill requires school districts to plan and implement programs to improve student safety, health, well-being, and academic achievement." + 
                    "The bill prohibits the Department of Education from imposing certain requirements on states or school districts seeking waivers from federal laws.",
      date: 'Became law - 12/10/15',
      meta: 'Just for you! Related to education'
    },
    {
      name: "Fitness Integrated Into Teaching (FIT) Kids Act",
      description: "The bill gives the Department of Education the power to award grants to local educational agencies, community-based organizations, and states to initiate, expand, and improve physical education programs for kindergarten through 12th grade students." +
                  "States willing to receive the grant must submit an analysis of needs in the areas of physical activity, physical education, fitness, and nutrition; a plan for improvement; and a description of how the state will implement a measurement system, coordinate with other state and federal programs, assist local educational agencies, and award subgrants.",
      date: 'Introduced to House of Representatives - 11/16/15',
      meta: 'Just for you! Related to education'
    },
    {
      name: "Automatic IRA Act of 2015",
      description: "This bill requires certain employers who do not maintain qualifying retirement plans or arrangements to give their eligible employees a payroll deposit individual retirement account (IRA) arrangement",
      date: 'Introduced to the House of Representatives - 01/22/15',
      meta: 'Just for you! Related to retirement'
    },
    {
      name: "State Minimum Wage",
      description: "This Florida bill would increase the state minimum wage from $6.15 to $15, prohibiting an employer from paying an employee at a arate less than the state minimum wage.",
      date: 'Introduced to the Florida Senate - 01/12/16',
      meta: 'Just for you! Related to Florida'
    }],
  }, {
    name: "Richard",
    age: "27",
    hometown: "Manchester, NH",
    profPic: "cartoon2.png",
    bio: "Richard is a passionate <b>teacher</b> in Manchester. He has been out of school for about 5 years now, and married for two of those years. He and his wife are thinking about having a <b>child</b> soon but want to make sure they are well prepared. As part of that preparation, the couple are looking to use their savings to <b>purchase their first home</b>. In his spare time, Rich likes to support the <b>animal rights</b> cause, and has one small dog himself. OR in his spare time, Rich likes to build and fly drones / quadcopters.",
    legislation: [
    {
      name: "Helping Schools Protect Our Children Act of 2015",
      description: "This bill includes the training of school personnel to recognize child sexual abuse among the uses of grants to states and subgrants to local educational agencies and partnerships under that program.",
      date: 'Introduced to House of Representatives - 05/15/15',
      meta: 'Just for you! Related to education'
    },
    {
      name: "Vaccinate All Children Act of 2015",
      description: "This bill amends the Public Health Service Act to prohibit the Department of Health and Human Services from awarding grants to public entities of a state for preventive health service programs unless the state requires each student in public elementary or secondary school to be vaccinated. The bill provides an exception for students whose health would be endangered by vaccination in the opinion of a physician conforming to the accepted standard of medical care.",
      date: 'Introduced to House of Representatives - 05/01/15',
      meta: 'Just for you! Related to education'
    },
    {
      name: "First Time Homeowner Savings Plan Act",
      description: "To amend the Internal Revenue Code of 1986 to increase the amount that can be withdrawn without penalty from individual retirement plans as first-time homebuyer distributions.",
      date: 'Introduced to House of Representatives - 11/19/15',
      meta: 'Just for you! Related to homeowners'
    },
    {
      name: "Refuge from Cruel Trapping Act",
      description: "Amends the National Wildlife Refuge System Administration Act of 1966 to prohibit the use or possession of body-gripping traps in the National Wildlife Refuge System." + 
      "Imposes on persons who possess or use such traps in the System: for a first offense, a civil fine of up to $500 for each body-gripping trap possessed or used; and for subsequent offenses, a civil fine of up to $1,000 for each body-gripping trap possessed or used, imprisonment for up to 180 days, or both such a civil fine and imprisonment.",
      date: 'Introduced to House of Representatives - 04/23/15',
      meta: 'Just for you! Related to wildlife preservation'
    }]
  }, {
    name: "Anita",
    age: "21",
    hometown: "Marion VA",
    profPic: "cartoon3.jpg",
    bio: "Anita is <b>studying</b> for her BS in Physics. Her biggest passion is <b>space</b> travel, hoping one day to help engineer rockets going to Mars. Herself religious, she cares about <b>religious equality</b> in America and works with initiatives aimed to spread understanding. She is aware that her <b>foreign affairs</b> knowledge is limited, but knows that it is an importance issue and wants to learn more.",
    legislation: [
    {
      name: "Federal Perkins Loan Program Extension Act of 2015",
      description: "The legislation extends the authority of institutions of higher education (IHEs) to make loans to new borrowers under the Federal Perkins Loan program through September 30, 2016. IHEs may continue to disburse Perkins Loans through March 31, 2018, to allow students to continue or complete an academic program if the student received a Perkins loan prior to October 1, 2016, and the student has exhausted Federal Direct Stafford Loans." +
                    "The bill prohibits any further automatic extensions of the Perkins Loan program.",
      date: 'Became law - 12/18/15',
      meta: 'Just for you! Related to student loans'
    },
    {
      name: "Condemning violence, bigotry, and hateful rhetoric towards Muslims in the United States",
      description: "Condemning violence, bigotry, and hateful rhetoric towards Muslims in the United States." +
                  "Whereas the victims of anti-Muslim hate crimes and rhetoric have faced physical, verbal, and emotional abuse because they were Muslim or believed to be Muslim;" +
                  "Whereas the constitutional right to freedom of religious practice is a cherished United States value and violence or hate speech towards any United States community based on faith is in contravention of the Nation’s founding principles;",
      date: 'Introduced to House of Representatives - 12/17/15',
      meta: 'Just for you! Related to civil rights'
    },
    {
      name: "Summaries for the North Korea Sanctions Enforcement Act of 2015",
      description: "This bill requires the President to investigate any credible information of sanctionable activities involving North Korea and to designate and apply sanctions with respect to any person (including entities) knowingly engaging in or contributing to activities in North Korea, through export or import, which involve weapons of mass destruction, significant arms or related materiel, significant luxury goods, money laundering, censorship, or human rights abuses.",
      date: 'Passed in the House of Representatives - 01/12/15',
      meta: 'Just for you! Related to foreign affairs'
    }]
  }];

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