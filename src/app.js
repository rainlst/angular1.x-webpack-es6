import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routerextras from './common/js/app.routerextras'


import routing from './app.config';
import initial from './app.initial';


//routers
import home from './features/home';
import pages from './pages/index';

angular.module('app', [uirouter, routerextras, home, ...pages])
  .run(initial)
  .config(routing);

if (module.hot) {
  //module.hot.accept();
  module.hot.status(function (newStatus, oldStatus) {
    console.log('***'+newStatus)
    document.location.reload(true)   
  });
}
