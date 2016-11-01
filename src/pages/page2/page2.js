import uirouter from 'angular-ui-router';
import routing from './page2.route';

import historyBack from '../../components/historyBack/historyBack';

export default angular.module('app.page2', [uirouter,historyBack])
  .config(routing)
  
  .name;