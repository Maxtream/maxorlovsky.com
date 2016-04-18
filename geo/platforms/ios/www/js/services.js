app.factory('User', function($http, SERVER) {
	var o = {
		name: '',
		auth: function(username) {
			return $http.post(SERVER.url + '/login', {
				username: username
			});
		}
	};

	return o;
});