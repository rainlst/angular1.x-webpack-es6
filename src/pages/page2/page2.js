import uirouter from 'angular-ui-router';
import routing from './page2.route';

import tabHeader from '../../components/tabHeader/tabHeader';

export default angular.module('app.page2', [uirouter,tabHeader])
  .config(routing)
  
  .name;