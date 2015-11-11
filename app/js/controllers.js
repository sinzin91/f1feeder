angular.module('F1FeederApp.controllers', []).
controller('driversController', function($scope, ergastAPIservice) {
	$scope.nameFilter = null;
	$scope.driversList = [];

	ergastAPIservice.getDrivers().success(function (response) {
		// Dig into the response to get the relevant data
		$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	})
});