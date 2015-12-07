"use strict";

app.factory('GiltActiveSales', ['$http', '$resource', '$routeParams', 'API', function($http, $resource, $routeParams, API){
	return $http.get('https://api.gilt.com/v1/sales/' + $routeParams.id + '.json?apikey=' + API.key)
		.success(function (data) {
			return data;
		})
		.error(function (err) {
			return err;
		});
}]);