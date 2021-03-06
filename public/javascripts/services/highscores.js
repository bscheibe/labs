angular.module('highscoreService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Highscores', function($http) {
		return {
			get : function(title) {
				if (title == "roygbiv") {
					return $http.get('/api/roygbiv/highscores');
				} else {
					return $http.get('/api/blur/highscores');
				}
			},
			create : function(title, highscoreData) {
				if (title == "roygbiv") {
					return $http.post('/api/roygbiv/highscores', highscoreData);
				} else {
					return $http.post('/api/blur/highscores', highscoreData);
				}
			},
			delete : function(title, id) {
				if (title == "roygbiv") {
					return $http.delete('/api/roygbiv/highscores/' + id);
				} else {
					return $http.delete('/api/blur/highscores/' + id);
				}
			}
		}
	});