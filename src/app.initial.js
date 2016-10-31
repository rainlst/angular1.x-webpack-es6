import FastClick from 'fastclick'


initial.$inject = ['$rootScope', '$state', '$stateParams'];
export default function initial($rootScope, $state, $stateParams) {

    
   //触摸延迟解决
    FastClick.attach(document.body);
    var statePosition = new Object();
    $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
        $rootScope.showloading = true
        var fromStringParams = JSON.stringify(fromParams)
        //记录url对应的位置
        if (fromState.name !== "") {
            if (fromState.position == true) {
                statePosition[fromState.name + fromStringParams] = window.scrollY;
                //console.log(statePosition);
            }
        }
    });
    $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
    });
    $rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
        $rootScope.showloading = false;
        var ToStringParams = JSON.stringify(toParams)
        if (toState.position == true) {
            setTimeout(function () {
                //alert(statePosition[toState.name]);
                window.scrollTo(0, statePosition[toState.name + ToStringParams])
            }, 0);
        } else {
            setTimeout(function () {
                //alert(statePosition[toState.name]);
                window.scrollTo(0, 0)
            }, 0);
        }

        //----------------传递title到mobile-------------
        var routerTitle = {
            //'viewReferral': '',
            'patientViewReferral': '订单详情',
            'basicFile': '基本资料',
            'doctorList': '医生列表',
            'departmentsList': '特需门诊',
            'MixViewReferral': '填写申请',
            'caseFile': '病例资料',
            'caseFileDetail': '病例详情',
            'picTag': '选择标签',
            'rejectReason': '拒绝理由'
        }
        //console.log(routerTitle[toState.name]);
        if (routerTitle[toState.name] != undefined) {
            $bridge.callMobile("changeTitle", { "params": routerTitle[toState.name] })
        }

    })
}