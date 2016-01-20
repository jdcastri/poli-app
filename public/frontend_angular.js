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
  var trending = {
      name: "Assault Weapons Ban of 2015",
      description: "To regulate assault weapons, to ensure that the right to keep and bear arms is not unlimited, and for other purposes.",
      meta: 'Trending!',
      pic: 'trending.png',
  };

  $scope.personas = [
  {
    name: "Mary",
    age: "44",
    hometown: "Orlando, FL",
    profPic: 'cartoon1.png',
    bio: "Mary is a proud <b>mother</b>. Between her family and full-time job, she doesn’t have much time to devote to learning about policy, but has strong views on <b>abortion</b>.",
    legislation: [trending,
    {
      name: "Increasing funding and flexibility in public education",
      subheader: "The Every Student Succeeds Act  hopes to improve the public education system in the United States by providing grants and giving states more flexibility.",
      description: "It provides grants aimed at improving low-performing schools, maintaining high-performing charter schools, and developing programs for American Indian students." +
                  " Additionally, states have more flexibility and responsibility in their public education systems than before. For Florida, this means the state has more freedom in weighing and administering the FCAT, evaluating their teachers, and evaluating their students. New Florida state legislation to fulfill this responsibility will likely emerge in the next few months.",
      date: "Became law - 12/10/15",
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Fitting fitness in education",
      subheader: "The Fitness Integrated Into Teaching (FIT) Kids Act hopes to improve physical fitness by integrating fitness into teaching.",
      description: "It achieves this by providing grants to local educational agencies and community-based organizations. State governments can also receive funding by applying for specific ideas they may have. For example, if Florida finds its students need more incentive to stay active during winters, it may apply to the federal government with an idea for a winter indoor-sports initiative.",
      date: 'Introduced - 11/16/2015',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Ensuring employers help in saving for your retirement",
      subheader: "This bill requires employers to allow their employees the option of automatically depositing payroll into a savings account called an Individual Retirement Account (IRA).",
      description: "Money you set aside in an IRA will leave you with more after you retire because it receives big tax-breaks. With this law, employers are now required to provide the option of working with their employees to automatically deposit pay into their IRA.",
      date: "Introduced - 04/29/2015",
      meta: 'Just for you! Related to retirement',
      pic: 'job.png',
    },
    {
      name: "Children from failed abortions must be given equal care",
      subheader: "This bill requires that if a child is born alive after a failed abortion, the health care practitioner must provide the same care as they would provide to any other child.",
      description: " Congress is discussing a law that would require any health care practitioner who is present when a child is born alive following an abortion or attempted abortion to practice same care as any other child born alive at the same age. The bill also ensures that the child be admitted immediately to a hospital." + 
"The bill goes further and defines that the term “born alive” is: “complete expulsion or extraction from his or her mother, at any stage of development, who after such explusion or extraction breathes or has a beating heart, pulsation of the umbilical cord, or definite movement of voluntary muscles, regardless of whether the umbilical cord has been cut." +
"Individuals who violate this  act are subject to a criminal fine, up to five years in prison, or criminal prosecution for murder. Finally, the woman may file a civil action for damages against the individual who violated this act.",
      date: "Passed Senate - 09/09/2015",
      meta: 'Just for you! Related to abortion',
      pic: 'baby.png',
    },
    {
      name: "Increasing the minimum wage to $15.00",
      subheader: "This bill requires proposes increasing the minimum wage in the state of Florida to $15 per hour.",
      description: "The federal law requires that states have a minimum wage of $7.25 per hour, and Florida currently tops that at $8.05 per hour. Raising the minimum wage to a value as high as $15 is a rare proposition. Currently, highest state minimum wages are around $10 per hour in states like California and Massachusetts. Historically, a bill calling for this drastic of a raise in minimum wage has not been passed before, but it is being considered in the Florida Senate nonetheless.",
      date: "Introduced to Florida Senate - 01/12/2016",
      meta: 'Just for you! Related to Florida',
      pic: 'florida.png',
    }],
  }, {
    name: "Richard",
    age: "27",
    hometown: "Rye, NH",
    profPic: "cartoon2.png",
    bio: "Richard has worked as  <b>teacher</b> since 2013. After having their first child,  Richard has shown interest in<b> purchasing a new home</b>. Richard has always been interested in <b>animal rights</b>, but has previously found it difficult to follow the legal landscape on the topic.",
    legislation: [trending,
    {
      name: "Training school personnel to recognize sexual abuse",
      subheader: "The Helping Schools Protect Our Children Act releases funds to provide training to school personnel regarding how to recognize child sexual abuse",
      description: "It does so by authorizing funds from a previous act (Elementary and Secondary Education Act of 1965) to be used for this new purpose.",
      date: 'Introduced - 04/15/15',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Vaccinating All Children",
      subheader: "The Vaccinate All Children Act of 2015 requires all children in state public schools to receive vaccinations in order for the state to continue to receive federal funding",
      description: "The bill prohibits public entities of states who do not comply from receiving grants from the Department of Health and Human Services.",
      date: 'Introduced - 05/01/15',
      meta: 'Just for you! Related to education',
      pic: 'school.png',
    },
    {
      name: "Investing More Retirement Money into Your First Home",
      subheader: "The First Time Homeowner Savings Plan Act allows individuals to withdraw more from their IRA when purchasing their first home",
      description: "Many people currently take advantage of Individual Retirement Accounts (IRAs). Money you set aside in an IRA will leave you with more after you retire because it receives big tax-breaks. Barring special situations, however, you may not withdraw money from an IRA without incurring a fee. Currently, you may use up to $10,000 from your IRA to purchase your first home without penalty. This bill would increase that amount to $25,000 dollars.",
      date: 'Introduced - 11/19/15',
      meta: 'Just for you! Related to homeowners',
      pic: 'home.png',
    },
    {
      name: "Saving National Wildlife From Cruel Trapping Practices",
      subheader: "The Refuge from Cruel Trapping Act seeks to ban body-gripping traps",
      description: "Body gripping traps are tools aimed to bind animals in place and are considered inhumane by some. This bill would ban those traps from the 150 million acres of land under the National Wildlife Refuge System.",
      date: 'Introduced - 04/23/15',
      meta: 'Just for you! Related to wildlife preservation',
      pic: 'wildlife.png',
    }]
  }, {
    name: "Anita",
    age: "21",
    hometown: "Marion, VA",
    profPic: "cartoon3.png",
    bio: "Anita is an <b>Aerospace Engineering student.</b> On campus, she works with an initiative aimed at spreading understanding and tolerance of all <b>faiths</b>. After her Study Abroad program in Korea, she has wanted to learn more about <b>foreign affairs</b> and to understand more about the action that America is taking.",
    legislation: [trending,
    {
      name: "Continuing issuance of student loans through 2016",
      subheader: "This bill permits colleges to continue issuing Federal Perkins Loans to students through 2016.",
      description: "Federal Perkins Loans are among the most affordable need-based options for students seeking to fund their education because they have low interest rates and flexible cancellation policies.",
      date: 'Became law - 12/18/15',
      meta: 'Just for you! Related to student loans',
      pic: 'school.png',
    },
    {
      name: "Authorizing new policies for NASA in 2015",
      subheader: "The  NASA Authorization Act redefines NASA's mission focus,  prescribes NASA's future research goals, and introduces new policy provisions",
      description: "As one key provision, this bill heightens NASA's mission focus more on human exploration deeper into the solar system, particularly regarding surface exploration on Mars. For example, the bill asks the president to rally other nations around a US-led Mars exploration initiative.",
      date: 'Passed House - 02/10/15',
      meta: 'Just for you! Related to space',
      pic: 'science.png',
    },
    {
      name: "Ensuring protection of American Muslims by U.S. authorities",
      subheader: "This bill reacts to recent increased animosity towards muslims by ensuring Muslims are treated equally by the authorities",
      description: "Specifically, to ensure the equality of Muslims with all citizens, it reaffirms the civil rights and liberties of American Muslims and confirms the House's dedication to rights of people of all backgrounds and faiths. The bill also urges American law enforcement to prevent hate crimes.The bill recognizes the positive part American Muslims have played in U.S. society and expresses condolences for those that have already been victims of hate crimes.",
      date: 'Introduced - 12/17/15',
      meta: 'Just for you! Related to civil rights',
      pic: 'civil_rights.png',
    },
    {
      name: "Placing rigorous restrictions on the removal of Iranian sanctions",
      subheader: "This bill prevents removal of US  sanctions on Iran until stringent criteria are met",
      description: "This bill calls for a US investigation to confirm that Iran is no longer developing nuclear weapons. The bill states that 90 days after this confirmation, US-imposed Iranian sanctions will be raised. Until recently, the United Nations had significant sanctions on Iran because of their nuclear program development. In January 2016, an organization called the International Atomic Enegery Agency (IAEA) determined that Iran had dismantled its nuclear program. IAEA confirmation caused the UN to remove sanctions immediately. This bill suggests that the US would follow suit only after it conducts its own investigation.",
      date: 'Introduced - 12/18/15',
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