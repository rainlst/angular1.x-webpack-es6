
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('page1', {
      // position: true,
      // sticky: true,
      url: '/page1',
      views: {
        'page1': {
          template: require('./page1.html'),
          //controller: 'page1',
          //controllerAs: 'home'
        }
      }
    }
    );
}