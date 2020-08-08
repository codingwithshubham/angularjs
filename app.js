(function(){

var a = angular.module('firstApp',[]);
    a.filter("myfilter", Filter);
    a.controller('controller', controller)
  //console.log(typeof a);

    function Filter(){
        return function(value, a,b){
           // console.log(a);
            return value.replace("likes","loves");
            
        };
    }

    function controller($scope){
        $scope.value="i likes";

        // $scope.change = function(){
        //     $scope.value = myfilterFilter($scope.value);
        // }
            
    }
})();