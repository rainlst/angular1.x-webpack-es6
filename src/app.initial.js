import FastClick from 'fastclick'
import $ from 'jquery'

initial.$inject = ['$rootScope', '$state', '$stateParams', '$location', '$window'];
export default function initial($rootScope, $state, $stateParams, $location, $window) {

    $rootScope.pageClass = 'page'

    //fastclick
    FastClick.attach(document.body);

    //position:ficed suit
    $(function () {
        var $body = $('body');
        var $inputs = $('input');

        $inputs.on('focus', function (e) {
            $body.addClass('fixfixed');
        });
        $inputs.on('blur', function (e) {
            $body.removeClass('fixfixed');
        });
    });



    //watch history.back event
    $rootScope.$on('$locationChangeStart', function () {
        // $rootScope.actualLocation = $location.path();
        if ($rootScope.previousLocation == $location.url()) {
            //alert("Back Button Pressed");
            $rootScope.pageClass = 'page prePage'
        } else {

            $rootScope.pageClass = 'page nextPage'
        }
        $rootScope.previousLocation = $rootScope.actualLocation;
        $rootScope.actualLocation = $location.url();
    });




    //saving status for pages
    var statePosition = new Object();
    $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
        $rootScope.showloading = true
        var fromStringParams = JSON.stringify(fromParams)
        //record page's position
        if (fromState.name !== "") {
            if (fromState.position == true) {
                statePosition[fromState.name + fromStringParams] = window.scrollY;
            }
        }
    });
    $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
        $rootScope.showloading = false;
        var ToStringParams = JSON.stringify(toParams)
        if (toState.position == true) {
            setTimeout(function () {
                window.scrollTo(0, statePosition[toState.name + ToStringParams])
            }, 0);
        } else {
            setTimeout(function () {
                window.scrollTo(0, 0)
            }, 0);
        }

    })
}