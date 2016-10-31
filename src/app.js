import './common/css/base.css';
import './common/css/animate.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routerextras from './common/js/app.routerextras'
import ngAnimate from 'angular-animate'


import routing from './app.config';
import initial from './app.initial';


//routers
import home from './features/home';
import pages from './pages/index';

angular.module('app', [uirouter, routerextras,ngAnimate, home, ...pages])
  .run(initial)
  .config(routing);

if (module.hot) {
  //module.hot.accept();
  module.hot.status(function (newStatus, oldStatus) {
    console.log('***'+newStatus)
    document.location.reload(true)   
  });
}
