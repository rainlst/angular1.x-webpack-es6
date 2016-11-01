
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('page2', {
      // position: true,
      // sticky: true,
      url: '/page2?hello',
      views: {
        'page2': {
          template: require('./page2.html'),
          //controller: 'page1',
          //controllerAs: 'home'
        }
      }
    }
    );
}