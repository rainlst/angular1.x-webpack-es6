


routing.$inject = ['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider'];

export default function routing($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
  //$locationProvider.html5Mode(true);
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://*.thedoc.cn/**',
    'http://p.thedoc.cn/**',
    'http://192.168.1.212:8082/**',
    'http://45.124.125.100/**',
    'http://192.168.0.215:8082/stream/**',
    'http://45.124.125.99/**'
  ]);
  $urlRouterProvider.otherwise('/page1');
 
}
