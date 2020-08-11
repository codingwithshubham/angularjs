(function(){

angular.module('shoppingApp',[])
   .controller('toBuy', toBuyList)
   .controller('bought',boughtList)
   .service('buyItemService', ServiceFun);

   function ServiceFun(){
    this.toBuyList = [{
                            item : "cookies",
                            itemQuantity : "20"
                        },
                        {
                            item : "softdrinks",
                            itemQuantity : "22"

                        },
                        {
                            item : "chips",
                            itemQuantity : "12"

                        },
                        {
                            item : "pancakes",
                            itemQuantity : "12"

                        },
                        {
                            item : "oranges",
                            itemQuantity : "10"

                        }];

    this.boughtList = [];

    this.bought = function(item, itemQuantity, index){
                   this.toBuyList.splice(index, 1);
                   this.boughtList.push({item: item,
                    itemQuantity: itemQuantity});
        
    };

}

   function toBuyList($scope, buyItemService){

       $scope.toBuyList = buyItemService.toBuyList;

       $scope.buyItem = function(item, quantity, index){   
        buyItemService.bought(item, quantity, index);        
       }       
       
       $scope.allBought = function(){
           return $scope.toBuyList.length === 0;
           
       }

   }

   function boughtList($scope, buyItemService){
       $scope.boughtList = buyItemService.boughtList;

       $scope.nothingBought = function(){
           return $scope.boughtList.length === 0;
       }

   }



})();