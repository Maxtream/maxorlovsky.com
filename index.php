<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="user-scalable=no, maximum-scale=1, width=device-width" />
    <meta name="robots" content="all,index,follow" />
    <meta name="description" content="Max Orlovsky (Maxtream) website" />
    <meta name="keywords" content="orlovsky, max orlovsky, maxtream, development, design" />    
    <meta name="author" content="Max Orlovsky (http://www.maxorlovsky.net)" />

    <title>Max Orlovsky Portfolio</title>

    <link rel="stylesheet" type="text/css" href="assets/build/styles.css" />
    
    <link href='//fonts.googleapis.com/css?family=Josefin+Slab:400&amp;subset=latin' rel='stylesheet' type='text/css'>
    <link href='//fonts.googleapis.com/css?family=Open+Sans:400&amp;subset=latin' rel='stylesheet' type='text/css'>

    <base href="/">
</head>

<body ng-controller="MainController" ng-cloak>

    <section class="sidebar-closer" ng-class="{'active': parentObject.sidebar}" ng-click="parentObject.sidebar = 0"></section>
    <section class="sidebar" ng-include="'/app/views/sidebar.html'" ng-class="{'active': parentObject.sidebar}"></section>

    <header>
        <nav>
            <div class="burger" ng-click="parentObject.sidebar = 1">
                <svg viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </div>
            <div ng-repeat="link in links.slice().reverse()" class="link-wrapper" ng-class="{'active': parentObject.currentPage == link.url}">
                <a ng-href="{{ ::link.url }}">{{ ::link.value }}</a>
                <div class="liner"></div>
            </div>
        </nav>

        <div class="info">
            <img class="photo" src="assets/images/me.jpg" />
            <h1>{{sidebar}}My name is <span>Max Orlovsky</span> and I research, plan, design, but mostly I <span>develop</span>.</h1>
            <div class="icons">
                <a href="https://www.twitter.com/PCEMaxtream" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1231 1000"><path d="M1231.052 118.453q-51.422 76.487 -126.173 130.403 .738 14.46 .738 32.687 0 101.273 -29.53 202.791 -29.53 101.519 -90.215 194.343 -60.685 92.824 -144.574 164.468 -83.889 71.644 -201.677 114.25 -117.788 42.606 -252.474 42.606 -210.2 0 -387.147 -113.493 31.406 3.495 60.242 3.495 175.605 0 313.687 -108.177 -81.877 -1.501 -146.654 -50.409 -64.777 -48.907 -89.156 -124.988 24.097 4.59 47.566 4.59 33.782 0 66.482 -8.812 -87.378 -17.5 -144.975 -87.04 -57.595 -69.539 -57.595 -160.523l0 -3.126q53.633 29.696 114.416 31.592 -51.762 -34.508 -82.079 -89.999 -30.319 -55.491 -30.319 -120.102 0 -68.143 34.151 -126.908 95.022 116.607 230.278 186.392 135.258 69.786 290.212 77.514 -6.609 -27.543 -6.621 -57.485 0 -104.546 73.994 -178.534 73.995 -73.988 178.541 -73.988 109.456 0 184.392 79.711 85.618 -16.959 160.333 -61.349 -28.785 90.59 -110.933 139.768 75.502 -8.972 145.088 -39.677z"/></svg></a>

                <a href="http://linkedin.com/in/maxorlovsky/en" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1036"><path d="M0 120q0-50 35-82.5t91-32.5q55 0 89 32 35 33 35 86 0 48-34 80-35 33-92 33l-1 0q-55 0-89-33t-34-83zm13 875l0-668l222 0l0 668l-222 0zm345 0l222 0l0-373q0-35 8-54 14-34 42.5-57.5t71.5-23.5q112 0 112 151l0 357l222 0l0-383q0-148-70-224.5t-185-76.5q-129 0-201 111l0 2l-1 0l1-2l0-95l-222 0q2 32 2 199t-2 469z"/></svg></a>

                <a href="https://github.com/Maxtream" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M0 499.968q0 -207.018 146.475 -353.493t353.493 -146.475 353.493 146.475 146.475 353.493 -146.475 353.493 -353.493 146.475 -353.493 -146.475 -146.475 -353.493zm54.684 0q0 183.582 130.851 314.433t314.433 130.851 314.433 -130.851 130.851 -314.433 -130.851 -314.433 -314.433 -130.851 -314.433 130.851 -130.851 314.433zm140.616 107.415q-3.906 -3.906 0 -7.812 7.812 -7.812 19.53 -5.859t13.671 3.906q13.671 5.859 30.271 26.366t26.366 28.319q46.872 39.06 95.697 5.859 3.906 -13.671 12.694 -23.436t16.601 -13.671 27.342 -11.718q-64.449 -5.859 -104.486 -22.46t-63.473 -41.989q-31.248 -35.154 -38.084 -91.791t8.789 -103.509q11.718 -29.295 33.201 -52.731 -15.624 -48.825 5.859 -111.321 62.496 3.906 113.274 42.966 97.65 -25.389 203.112 -1.953 13.671 -9.765 41.989 -24.413t71.285 -16.601q7.812 21.483 10.742 50.778t-2.929 54.684q44.919 46.872 46.872 124.992 0 62.496 -21.483 103.509t-76.167 68.355q-37.107 17.577 -97.65 21.483 27.342 13.671 40.037 28.319t16.601 45.895l0 61.52t1.953 59.567q5.859 9.765 13.671 16.601t13.671 9.765 3.906 8.789 -15.624 5.859q-33.201 0 -52.731 -23.436 -5.859 -9.765 -5.859 -23.436l0 -93.744q0 -15.624 -7.812 -22.46t-15.624 -8.789l0 123.039q0 33.201 7.812 42.966t9.765 19.53q1.953 1.953 -2.929 2.929t-16.601 -2.929q-25.389 -5.859 -35.154 -26.366t-9.765 -43.943l0 -121.086l-25.389 0l0 121.086q0 23.436 -9.765 44.919 -13.671 27.342 -50.778 29.295 -5.859 -1.953 -5.859 -3.906 1.953 -1.953 11.718 -19.53 1.953 -3.906 4.883 -15.624t2.929 -27.342l0 -123.039q-7.812 1.953 -14.648 8.789t-6.836 22.46l0 93.744q0 13.671 -5.859 23.436 -17.577 23.436 -52.731 23.436 -13.671 0 -15.624 -5.859 -1.953 -3.906 .977 -6.836t8.789 -6.836 7.812 -5.859q7.812 -5.859 11.718 -15.624 5.859 -7.812 2.929 -41.013t-.977 -42.966q-50.778 17.577 -103.509 -17.577 -15.624 -15.624 -31.248 -44.919 -11.718 -21.483 -46.872 -50.778z"/></svg></a>

                <a href="https://www.facebook.com/MaxOrlovsky" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M182.594 0c-101.149 0 -182.594 81.445 -182.594 182.594l0 634.813c0 101.149 81.445 182.594 182.594 182.594l344.063 0l0 -390.938l-103.375 0l0 -140.75l103.375 0l0 -120.25c0 -94.475 61.079 -181.219 201.781 -181.219 56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963 -.406 -89.844 -.406c-50.739 0 -58.875 23.378 -58.875 62.188l0 102.781l152.75 0l-6.656 140.75l-146.094 0l0 390.938l141.906 0c101.149 0 182.594 -81.445 182.594 -182.594l0 -634.813c0 -101.149 -81.445 -182.594 -182.594 -182.594l-634.813 0z"/></svg></a>

                <a href="mailto:max.orlovsky@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486 486"><path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584c5.895,9.355,9.446,20.344,9.446,32.219V363.906zM242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z"/></svg></a>

            </div>
        </div>
    </header>

    <section class="container" id="container" ng-view></section>

    <footer>
        <p>Copyright 2011 - {{ ::year }}. Max Orlovsky.</p>
    </footer>

    <script src="assets/build/scripts.js"></script>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-33358036-1', 'maxorlovsky.net');
        ga('send', 'pageview');
    </script>

</body>
</html>