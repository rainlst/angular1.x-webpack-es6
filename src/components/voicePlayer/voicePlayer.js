import angular from 'angular';
import $ from 'jquery';
export default angular.module("voicePlayer", [])
    .directive('voicePlayer',[ function () {
        return {
            restrict: 'AE',
            scope: { voicelist: '=' },
            template: require('./voicePlayer.html'),
            replace: true,
            link: function (scope, element, attrs) {
                scope.addEvent = function (bool) {
                    if (bool) {
                        for (var i in scope.voicelist) {
                            scope.voicelist[i].play = false;
                        }
                        $(element).children().find("audio").bind("ended", function () {

                            scope.$apply(function () {
                                for (var i in scope.voicelist) {
                                    scope.voicelist[i].play = false;
                                }
                            })
                        })
                    }

                }
                // console.log(scope.voicelist);


                scope.voice_play = function (index) {
                    if (scope.voicelist[index].play == false) {
                        //如果还未开始播放
                        for (var i in scope.voicelist) {
                            scope.voicelist[i].play = false;
                        }
                        $(element).children().find("audio").each(function () {
                            $(this)[0].load();
                        });

                        setTimeout(function () {
                            $(element).children().find("p").eq(index).children("audio")[0].play();
                        }, 5);

                        scope.voicelist[index].play = true;

                    }
                    else {
                        //如果开始播放
                        scope.voicelist[index].play = false;
                        $(element).children().find("audio").each(function () {
                            $(this)[0].load();

                        });
                    }


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

