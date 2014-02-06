// angular.module is a global place for creating, registering and retrieving Angular modules
// 'stacks' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'stacks.services' is found in services.js
// 'stacks.controllers' is found in controllers.js

document.addEventListener('deviceready', function(){

  angular.module('stacks', [
      'ui.router',
      'ngTouch',
      'ngAnimate',
      'stacks.services',
      'stacks.controllers',
      'stacks.directives'
    ]
  )
  .config(function($urlRouterProvider, $stateProvider, databaseProvider) {

    var resolve = {  
      delay: function($q, $timeout) {  
        var delay = $q.defer();  
        $timeout(delay.resolve, 0, false);  
        return delay.promise;  
      }  
    };

    // Use AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $urlRouterProvider.otherwise("/state1");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        resolve: resolve
      })
      .state('tab', {
        url: "/tab",
        templateUrl: "templates/tabs.html",
        resolve: resolve
      })
      .state('tab.build', {
        url: "/build",
        templateUrl: "templates/build_library.html",
        resolve: resolve
      })
      .state('tab.add', {
        url: "/add",
        templateUrl: "templates/add.html",
        controller: "AddBookController",
        resolve: resolve
      })
      .state('tab.addmanually',{
        url:"/addmanually",
        templateUrl: "templates/add.manually.html",
        controller: "AddBookController",
        resolve: resolve
      })
      .state('tab.book',{
        url:"/book/:id",
        templateUrl: "templates/book.html",
        controller: "BookController",
        resolve: resolve
      })
      .state('tab.search',{
        url:"/search",
        templateUrl: "templates/search.html",
        controller: "BookController",
        resolve: resolve
      })
      .state('tab.bookadded',{
        url:"/bookadded",
        templateUrl: "templates/book.added.html",
        resolve: resolve
      })
      .state('tab.searchresults',{
        url:"/searchresults",
        templateUrl: "templates/search.results.html",
        controller: "SearchResults",
        resolve: resolve
      })
      .state('tab.no_results',{
        url:"/noresults",
        templateUrl: "templates/search.no_results.html",
        controller: "BookController",
        resolve: resolve
      })
      .state('tab.library',{
        url:"/library",
        templateUrl: "templates/library.html",
        controller: "LibraryController",
        resolve: resolve
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');


    // connect to the database
    databaseProvider.connect('stacks');

    // style the application
    StatusBar.styleLightContent();

  })
  .run(function($rootScope){
    
    // set the conenction status to global scope
    // the connection plugin is bringing problems 
    // while debugging on the browser,
    // setting connection_available to true
    if( navigator.connection ) {
      $rootScope.connection_available = (navigator.connection.type == Connection.NONE) ? false : true;
    } else {
      $rootScope.connection_available = true;
    }

  })

  angular.bootstrap(document, ['stacks']);

});

