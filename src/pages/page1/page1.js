import uirouter from 'angular-ui-router';
import routing from './page1.route';
import voicePlayer from '../../components/voicePlayer/voicePlayer';


export default angular.module('app.page1', [uirouter,voicePlayer])
    .config(routing)
    .service('API', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        return {
            get_data: function () {
                var config = { params: { userdata:'stone' } };
                return $http.get('/getlist/error', config)
            }
        }
    }])
    .controller('test1', ['API',function (API) {
        API.get_data().then((response)=>{

       

        })


        //obejct.asign demon
        const obj = [{ a: 1 }, { a: 1 }]
        let copy = Object.assign([], obj);
      



        //map demon
        let copy1 = copy.map((element) => {
            return { a: element.a + 1 }
        })
      



        //filter demon
        let copy2=copy.filter((element, index, arr) => {
             return element.a=== 1
            //return arr.indexOf(element) === index
        }
        )
     

        

        //reduce demon
        let copy3=copy.reduce((pre,element)=>{
            return pre+element.a
        },0)
       


    }])
    .controller('test2', ['$scope',function ($scope) {
        
        $scope.voicedata=[
                {
                    "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
                    "time":21
                },
                {
                    "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
                    "time":21
                },
                {
                    "url": "http://192.168.0.215:8082/stream/6448300e-8249-49af-b948-1ecedeaeaa27.mp3",
                     "time":21
                },
            ]

    }])
    .name;