import uirouter from 'angular-ui-router';
import routing from './page1.route';
import voicePlayer from '../../components/voicePlayer/voicePlayer';
import tabHeader from '../../components/tabHeader/tabHeader';

export default angular.module('app.page1', [uirouter,voicePlayer,tabHeader])
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
                    "url": "http://45.124.125.99/m10.music.126.net/20161101214738/5d0b809a500d078046190fec7d3f72b6/ymusic/af72/d6ca/db27/bc9bec4a7e909411b1bcbb7eefaa1bb3.mp3",
                    "time":21
                },
                {
                    "url": "http://45.124.125.99/m10.music.126.net/20161101214738/5d0b809a500d078046190fec7d3f72b6/ymusic/af72/d6ca/db27/bc9bec4a7e909411b1bcbb7eefaa1bb3.mp3",
                    "time":21
                }
            ]

    }])
    .name;