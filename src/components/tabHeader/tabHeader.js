import angular from 'angular';
import historyBack from '../historyBack/historyBack';
import $ from 'jquery'
import './tabHeader.less'
export default angular.module("tabHeader", [historyBack])
    .directive('tabHeader', [function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=' },
            template: require('./tabHeader.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                    var $container = $(element);
                    var $occupy = $('<div></div>')
                    $occupy.css("height", $container.outerHeight())
                    $container.after($occupy);
            },
            controller: function ($scope, $rootScope, $window) {


            }
        };
    }])
    .name;





//组件数据类型
            // [
            //     {
            //         "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
            //         "time":21
            //     },
            //     {
            //         "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
            //         "time":21
            //     },
            //     {
            //         "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
            //          "time":21
            //     },
            // ]

