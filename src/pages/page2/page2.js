import uirouter from 'angular-ui-router';
import routing from './page2.route';

import '../../common/css/style.css'

import tabHeader from '../../components/tabHeader/tabHeader';

export default angular.module('app.page2', [uirouter, tabHeader])
  .config(routing)
  .controller('page2', ['$scope', function ($scope) {

    $scope.operatorfunction = function () {
      alert('say hi')
    }
  }])

  .name;