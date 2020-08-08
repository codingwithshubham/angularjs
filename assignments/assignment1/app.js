(function(){
    'use strict';

    angular.module('assignment1',[])
        .controller('controller', function($scope){
            $scope.name="";
          
            $scope.check = function(){
              $scope.output=  check($scope.name);
            }  
        });

        function check(name){
            if(name === "")
                    return "Please enter data first";
                else{
                        var input = name.split(',');
                        if(input.length < 4)
                            return "Enjoy!";
                        else
                           return "Too much!";
                }
        }

})();