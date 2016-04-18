app.controller('HomeCtrl', function($scope, $cordovaGeolocation, $cordovaBackgroundGeolocation, $ionicPlatform, User, SERVER) {
    $scope.code = '';
    $scope.message = '';
    $scope.error = false;
    $scope.success = false;

    $scope.send = function() {
        /*User.auth($scope.code).then(function(response) {
            $scope.message = 'Success';
            $scope.success = true;
        }, function() {
            $scope.message = 'Error';
            $scope.error = true;
            $scope.message = 'Success';
            $scope.success = true;
        });

        User.name = 'mo';
        */
        $scope.geo();
        //setInterval($scope.geo(), 5000);
    };

    $scope.geo = function() {
        $ionicPlatform.ready(function() {
            $scope.message = 'Loading...';

            /*var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                var lat  = position.coords.latitude
                var lng = position.coords.longitude
                $scope.message = lat+', '+lng
            }, function(err) {
                // error
            });*/

            var bgGeo = $cordovaBackgroundGeolocation;

            var callbackFn = function(location, taskId) {
                var coords = location.coords;
                var lat    = coords.latitude;
                var lng    = coords.longitude;
                $scope.message = lat+', '+lng;

                // Simulate doing some extra work with a bogus setTimeout.  This could perhaps be an Ajax request to your server.
                // The point here is that you must execute bgGeo.finish after all asynchronous operations within the callback are complete.
                setTimeout(function() {
                  bgGeo.finish(taskId); // <-- execute #finish when your work in callbackFn is complete
                }, 1000);
            };

            var failureFn = function(error) {
                console.log('BackgroundGeoLocation error');
                $scope.message = 'BackgroundGeoLocation error';
            }

            // BackgroundGeoLocation is highly configurable.
            bgGeo.configure(callbackFn, failureFn, {
                // Geolocation config
                desiredAccuracy: 0,
                stationaryRadius: 50,
                distanceFilter: 50,
                disableElasticity: false, // <-- [iOS] Default is 'false'.  Set true to disable speed-based distanceFilter elasticity
                locationUpdateInterval: 5000,
                minimumActivityRecognitionConfidence: 80,   // 0-100%.  Minimum activity-confidence for a state-change 
                fastestLocationUpdateInterval: 5000,
                activityRecognitionInterval: 10000,
                stopDetectionDelay: 1,  // Wait x minutes to engage stop-detection system
                stopTimeout: 2,  // Wait x miutes to turn off location system after stop-detection
                activityType: 'AutomotiveNavigation',

                // Application config
                debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
                forceReloadOnLocationChange: false,  // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a new location is recorded (WARNING: possibly distruptive to user) 
                forceReloadOnMotionChange: false,    // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when device changes stationary-state (stationary->moving or vice-versa) --WARNING: possibly distruptive to user) 
                forceReloadOnGeofence: false,        // <-- [Android] If the user closes the app **while location-tracking is started** , reboot app when a geofence crossing occurs --WARNING: possibly distruptive to user) 
                stopOnTerminate: false,              // <-- [Android] Allow the background-service to run headless when user closes the app.
                startOnBoot: true,                   // <-- [Android] Auto start background-service in headless mode when device is powered-up.

                // HTTP / SQLite config
                /*url: SERVER.url+'/geolock',
                method: 'POST',
                batchSync: true,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
                autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
                maxDaysToPersist: 1,    // <-- Maximum days to persist a location in plugin's SQLite database when HTTP fails
                headers: {
                    "X-FOO": "bar"
                },
                params: {
                    "name": User.name
                }*/
            });

            // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
            bgGeo.start();

            // If you wish to turn OFF background-tracking, call the #stop method.
            // bgGeo.stop()
        });
    };
});
