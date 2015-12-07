"use strict";

app.controller('SalesCtrl', ['$scope', '$location', 'GiltActiveSales', function ($scope, $location, GiltActiveSales) {
	GiltActiveSales.success(function (data) {
		$scope.list = data;
	});
	$scope.getRoute = function () {
		var routeName = $location.path();
		return routeName;
	};
}]);