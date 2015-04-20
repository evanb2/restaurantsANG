bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName });
    $scope.restaurantName = null;
    $scope.restaurants.push({ phone: $scope.restaurantPhone });
    $scope.restaurantPhone = null;
    $scope.restaurants.push({ street: $scope.restaurantStreet });
    $scope.restaurantStreet = null;
    $scope.restaurants.push({ city: $scope.restaurantCity });
    $scope.restaurantCity = null;
    $scope.restaurants.push({ state: $scope.restaurantState });
    $scope.restaurantState = null;
    $scope.restaurants.push({ zip: $scope.restaurantZip });
    $scope.restaurantZip = null;
    $scope.restaurants.push({ website: $scope.restaurantWebsite });
    $scope.restaurantWebsite = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
