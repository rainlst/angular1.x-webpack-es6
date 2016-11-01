import angular from 'angular';
export default angular.module("historyBack", [])
    .directive('historyBack', [function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=' },
            template: require('./historyBack.html'),
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
            },
            controller:function($scope,$rootScope,$window){
               
                 $scope.locationBack=function(){
                     $window.history.back();

                 }
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

