/* // Angular
import * as angular from 'angular';

// Config
import { routing } from './config';

// Controllers
import { MainController } from './controllers/main-controller';
import { AboutController } from './controllers/about-controller';
import { WorkController } from './controllers/work-controller';

angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'ngTouch'
])
.config(routing)
.controller('MainController', MainController)
.controller('AboutController', AboutController)
.controller('WorkController', WorkController); */