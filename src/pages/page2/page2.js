import uirouter from 'angular-ui-router';
import routing from './page2.route';
import './public.less'

export default angular.module('app.page2', [uirouter])
  .config(routing)
  
  .name;