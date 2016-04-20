# Assessment Project Comments And Assumptions

Please write down any comments or assumptions you would like us to know when reviewing the test in the list below.

## Comments And Assumptions

Images of freekicks ongoal and goalkick were really confusing, so I might set up those wrong. And what's the difference between freekick and ongoal? Image is the same, just placement is different.

I didn't bother with header a lot as it is mention in point Nr. 14 to make it hardcoded, so I only made "dynamic" parts.

I wen't with angularjs CDN links for angular because, well it's CDN and probably already cached on person PC from other website.

On betslip I ignored num-pad design/functionality, just because it would take some time to implement and it not really stated in the tasks how it should function + on mobile when you go into input, it automatically open default numpad.

Structure of angular app is very simple, I didn't went with "modular" approach as it is not required for such a small app. Of course if there would be much more pages to view, maybe it would be better to create something like
- app.js
-----| home
-----------| controller.js
-----------| directives.js
-----------| services.js
-----------| view.html
-----| account
-----------| controller.js
-----------| directives.js
-----------| services.js
-----------| view.html
-----| history
-----------| controller.js
-----------| directives.js
-----------| services.js
-----------| view.html
-----| includes
-----------| betslip.html
etc.

I've set limits of screen from 320px to 505px to more or less match all available smartphones css width http://www.mydevice.io/devices/#sortSmartphones
But mainly developed under screen size 320px

I didn't spend a lot of time on "making it pretty".

I decided to go with main controller and not to create betslip controller because it required a lot of interaction. But if would be needed, of course it's possible to do with the service.

I didn't use ng-pattern etc validation, did it directly in controller, the one that make sence. Of course there might be more, like lower number, highest number, etc.

For some reason ng-cloak doesn't do the trick and you can see variable for a second, maybe that is a drawback of using CDN, not sure. That's why I added loading event. So it would show content only after page fully parsed by angular.