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
    bio: "Mary is a proud <b>mother</b>. Between her family and full-time job, she doesn’t have much time to devote to learning about policy, but has strong views on <b>abortion</b>.",
    legislation: [
    {
      name: "Increasing funding and flexibility in public education",
      subheader: "The Every Student Succeeds Act  hopes to improve the public education system in the United States by providing grants and giving states more flexibility.",
      description: "It provides grants aimed at improving low-performing schools, maintaining high-performing charter schools, and developing programs for American Indian students." +
                  " Additionally, states have more flexibility and responsibility in their public education systems than before. For Florida, this means the state has more freedom in weighing and administering the FCAT, evaluating their teachers, and evaluating their students. New Florida state legislation to fulfill this responsibility will likely emerge in the next few months.",
      meta: 'Trending!',
      pic: 'trending.png',
    },
    {
      name: "Fitting fitness in education",
      subheader: "The Fitness Integrated Into Teaching (FIT) Kids Act hopes to improve physical fitness by integrating fitness into teaching.",
      description: "It achieves this by providing grants to local educational agencies and community-based organizations. State governments can also receive funding by applying for specific ideas they may have. For example, if Florida finds its students need more incentive to stay active during winters, it may apply to the federal government with an idea for a winter indoor-sports initiative.",
      date: 'Became law - 12/10/15',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Ensuring employers help in saving for your retirement",
      subheader: "This bill requires employers to allow their employees the option of automatically depositing payroll into a savings account called an Individual Retirement Account (IRA).",
      description: "Money you set aside in an IRA will leave you with more after you retire because it receives big tax-breaks. With this law, employers are now required to provide the option of working with their employees to automatically deposit pay into their IRA.",
      meta: 'Just for you! Related to retirement',
      pic: 'job.png',
    },
    {
      name: "Children from failed abortions must be given equal care",
      subheader: "This bill requires that if a child is born alive after a failed abortion, the health care practitioner must provide the same care as they would provide to any other child.",
      description: " Congress is discussing a law that would require any health care practitioner who is present when a child is born alive following an abortion or attempted abortion to practice same care as any other child born alive at the same age. The bill also ensures that the child be admitted immediately to a hospital." + 
"The bill goes further and defines that the term “born alive” is: “complete expulsion or extraction from his or her mother, at any stage of development, who after such explusion or extraction breathes or has a beating heart, pulsation of the umbilical cord, or definite movement of voluntary muscles, regardless of whether the umbilical cord has been cut." +
"Individuals who violate this  act are subject to a criminal fine, up to five years in prison, or criminal prosecution for murder. Finally, the woman may file a civil action for damages against the individual who violated this act.",
      meta: 'Just for you! Related to abortion',
      pic: 'baby.png',
    },
    {
      name: "Increasing the minimum wage to $15.00",
      subheader: "This bill requires proposes increasing the minimum wage in the state of Florida to $15 per hour.",
      description: "The federal law requires that states have a minimum wage of $7.25 per hour, and Florida currently tops that at $8.05 per hour. Raising the minimum wage to a value as high as $15 is a rare proposition. Currently, highest state minimum wages are around $10 per hour in states like California and Massachusetts. Historically, a bill calling for this drastic of a raise in minimum wage has not been passed before, but it is being considered in the Florida Senate nonetheless.",
      meta: 'Just for you! Related to Florida',
      pic: 'florida.png',
    }],
  }, {
    name: "Richard",
    age: "27",
    hometown: "Rye, NH",
    profPic: "cartoon2.png",
    bio: "Richard has worked as  <b>teacher</b> since 2013. After having their first child,  Richard has shown interest in<b> purchasing a new home</b>. Richard has always been interested in <b>animal rights</b>, but has previously found it difficult to follow the legal landscape on the topic.",
    legislation: [
    {
      name: "Assault Weapons Ban of 2015",
      description: "To regulate assault weapons, to ensure that the right to keep and bear arms is not unlimited, and for other purposes.",
      // date: 'Introduced to the House of Representatives - 12/16/15',
      meta: 'Trending!',
      pic: 'trending.png',
    },
    {
      name: "Helping Schools Protect Our Children Act of 2015",
      description: "This bill includes the training of school personnel to recognize child sexual abuse among the uses of grants to states and subgrants to local educational agencies and partnerships under that program.",
      // date: 'Introduced to House of Representatives - 05/15/15',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Vaccinate All Children Act of 2015",
      description: "This bill amends the Public Health Service Act to prohibit the Department of Health and Human Services from awarding grants to public entities of a state for preventive health service programs unless the state requires each student in public elementary or secondary school to be vaccinated. The bill provides an exception for students whose health would be endangered by vaccination in the opinion of a physician conforming to the accepted standard of medical care.",
      // date: 'Introduced to House of Representatives - 05/01/15',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "First Time Homeowner Savings Plan Act",
      description: "To amend the Internal Revenue Code of 1986 to increase the amount that can be withdrawn without penalty from individual retirement plans as first-time homebuyer distributions.",
      // date: 'Introduced to House of Representatives - 11/19/15',
      meta: 'Just for you! Related to homeowners',
      pic: 'home.png',
    },
    {
      name: "Refuge from Cruel Trapping Act",
      description: "Amends the National Wildlife Refuge System Administration Act of 1966 to prohibit the use or possession of body-gripping traps in the National Wildlife Refuge System." + 
      "Imposes on persons who possess or use such traps in the System: for a first offense, a civil fine of up to $500 for each body-gripping trap possessed or used; and for subsequent offenses, a civil fine of up to $1,000 for each body-gripping trap possessed or used, imprisonment for up to 180 days, or both such a civil fine and imprisonment.",
      // date: 'Introduced to House of Representatives - 04/23/15',
      meta: 'Just for you! Related to wildlife preservation',
      pic: 'wildlife.png',
    }]
  }, {
    name: "Anita",
    age: "21",
    hometown: "Marion, VA",
    profPic: "cartoon3.png",
    bio: "Anita is an <b>Aerospace Engineering student.</b> On campus, she works with an initiative aimed at spreading understanding and tolerance of all <b>faiths</b>. After her Study Abroad program in Korea, she has wanted to learn more about <b>foreign affairs</b> and to understand more about the action that America is taking.",
    legislation: [
    {
      name: "Assault Weapons Ban of 2015",
      description: "To regulate assault weapons, to ensure that the right to keep and bear arms is not unlimited, and for other purposes.",
      // date: 'Introduced to the House of Representatives - 12/16/15',
      meta: 'Trending!',
      pic: 'trending.png',
    },
    {
      name: "Federal Perkins Loan Program Extension Act of 2015",
      description: "Extends the Federal Perkins Loan Program through 2016. Federal Perkins Loans are among the most affordable need-based options for students, with low interest rates and flexible cancellation policies.",
      date: 'Became law - 12/18/15',
      meta: 'Just for you! Related to student loans',
      pic: 'school.png',
    },
    {
      name: "Condemning violence, bigotry, and hateful rhetoric towards Muslims in the United States",
      description: "Condemning violence, bigotry, and hateful rhetoric towards Muslims in the United States." +
                  "Whereas the victims of anti-Muslim hate crimes and rhetoric have faced physical, verbal, and emotional abuse because they were Muslim or believed to be Muslim;" +
                  "Whereas the constitutional right to freedom of religious practice is a cherished United States value and violence or hate speech towards any United States community based on faith is in contravention of the Nation’s founding principles;",
      // date: 'Introduced to House of Representatives - 12/17/15',
      meta: 'Just for you! Related to civil rights',
      pic: 'civil_rights.png',
    },
    {
      name: "Summaries for the North Korea Sanctions Enforcement Act of 2015",
      description: "This bill requires the President to investigate any credible information of sanctionable activities involving North Korea and to designate and apply sanctions with respect to any person (including entities) knowingly engaging in or contributing to activities in North Korea, through export or import, which involve weapons of mass destruction, significant arms or related materiel, significant luxury goods, money laundering, censorship, or human rights abuses.",
      // date: 'Passed in the House of Representatives - 01/12/15',
      meta: 'Just for you! Related to foreign affairs',
      pic: 'world.png',
    }]
  }];

  $scope.submitEmail = function() {
    if ($scope.email) {

      $http.post('/newEmail', {email: $scope.email})
        .then(function() {
          var alert = $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Thank you!')
              .textContent('We will keep you posted on the development of our applications. Together, we are confident we change the way people engage with legislation. Again, we promise not to distribute your email address. For any questions or concerns, feel free to contact us at poli@mit.edu.')
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