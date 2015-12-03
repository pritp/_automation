var mode = angular.module('app',['ngRoute']);

mode.config(['$routeProvider',router]);

function router($routeProvider){
    $routeProvider.when('/',{templateUrl:'partial/landingPage.html'});
    $routeProvider.when('/automation',{templateUrl:'partial/automation.html'});
    $routeProvider.otherwise({redirectTo: '/'});
}

mode.controller('commonController',['$scope','$location','$http',function($scope,$location,$http){
    var count = 0;
    var timer;
    $scope.runFlag=false;
    $scope.mainPage=function(){
        $location.path("/automation");
    };

    $scope.runflows=function(value){
        //console.log("=========clicked "+value);
        $scope.runFlag=true;

       timer= setInterval(myFunction, 1000);

         $http.get('/api/auto/flows',{
         params:{
             market_flow:value.value1,
             census_flow:value.value2,
             report_flow:value.value3,
             pop:value.value4
         }
         }).success(function(data) {
            console.log(data);
         }).error(function(errdata) {
            console.log("err",errdata);
         });
    };
    var myFunction = function(){
        count=count+1;
        if(count===10){
            $scope.runFlag=false;
            $scope.$apply();
            clearTimeout(timer);
        }
        //console.log(count);

    };

   /* $scope.$watch('runFlag',function(newVal,OldVal){
        //console.log(newVal);
    });*/

}]);