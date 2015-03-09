"use strict"

window.app = angular.module( "mtgbuilder", [
	"ngRoute"
])

window.app.config ( $routeProvider ) ->
	$routeProvider.when("/",
		controller: "HomePageController"
		templateUrl: "/views/home.html"
	)
	return
