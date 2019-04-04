var spotApp = angular.module ('spotApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMessages']);

spotApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/consumerprofile',{
            templateUrl: 'views/consumerprofile.html',
            controller: 'consumerController'
        })
        .when('/sellerprofile',{
            templateUrl: 'views/sellerprofile.html',
            controller: 'sellerController'
        })
       
        .when('/ ',{
            templateUrl: 'index.html',
        })

        .when('/signup',{
            templateUrl: 'views/signup.html',
            controller: 'signupController'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'logController'
        })

        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'spotController'
           
        }).otherwise({
            redirectTo: '/home'
        })
}])

spotApp.controller('consumerController', function($scope){
    $scope.logo = {
        src: 'img/g892.png'
    }

    $scope.account  =   {
        src: 'img/flowRoot38.png'
    }
});

spotApp.controller('sellerController', function($scope){
    $scope.wall = {
        src: 'img/shoprtite lekki.JPG'
    }

    $scope.seller = {
        src: 'img/bitmap.png'
    }
});


spotApp.controller('signupController', function($scope){
    $scope.signlogo = {
        src: 'img/bitmap.png'
    }

    $scope.signlog = {
        src: 'img/g229.png'
    }

    $scope.uplogo = {
        src: 'img/g892.png'
    }

    $scope.registration = {
        Firstname: '',
        Lastname: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        confirmpassword: '',
        
    }

});

spotApp.controller('logController', function($scope){

    $scope.signlog = {
        src: 'img/g892.png'
    }

    $scope.nalogo = {
        src: 'img/bitmap.png'
    }
    $scope.logbut= 'button'

    $scope.user = {
        username: '',
        password: ''
     }
});


spotApp.controller ('spotController', function($scope, $timeout, $http){

    $scope.navlogo = {
        src: 'img/bitmap.png'
    }

$scope.title = 'button'


$scope.banner = "the shop the provides the best";
    $timeout(function() {
        $scope.banner="pick from the best";
    }, 2000);

$http.get('data/stores.json').then(function(response){
    $scope.stores = response.data;
})


   console.log(angular.toJson ($scope.stores));
});



/*jquery*/

