bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
                              phone: $scope.restaurantPhone,
                              street: $scope.restaurantStreet,
                              city: $scope.restaurantCity,
                              state: $scope.restaurantState,
                              zip: $scope.restaurantZip,
                              website: $scope.restaurantWebsite,
                              description: $scope.restaurantDescription });
    $scope.restaurantName = null;
    $scope.restaurantPhone = null;
    $scope.restaurantStreet = null;
    $scope.restaurantCity = null;
    $scope.restaurantState = null;
    $scope.restaurantZip = null;
    $scope.restaurantWebsite = null;
    $scope.restaurantDescription = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
