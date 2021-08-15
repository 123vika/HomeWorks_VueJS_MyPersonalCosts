import Vue from 'vue';
import Router from 'vue-router';
import PageDashboard from '../pages/PageDashboard';
import PageAbout from '../pages/PageAbout';
import Page404 from '../pages/Page404';
import PageLogin from '../pages/PageLogin';
import PageFoodCategory from '../pages/PageFoodCategory';
import PageTransportCategory from '../pages/PageTransportCategory';
import PageEntertainmentCategory from '../pages/PageEntertainmentCategory';


Vue.use(Router);

// export default new Router({
  const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: PageDashboard,
      name: 'MainPage'
    },
    {
      path: '/dashboard',
      component: PageDashboard,
      name: 'Dashboard'
    },
    {
      path: '/dashboard/:page',
      component: PageDashboard,
      name: 'DashboardPageNumber'
    },
    {
      path: '/food',
      component: PageFoodCategory,
      name: 'PageFoodCategory'
    },
    {
      path: '/transport',
      component: PageTransportCategory,
      name: 'PageTransportCategory'
    },
    {
      path: '/entertainment',
      component: PageEntertainmentCategory,
      name: 'PageEntertainmentCategory'
    },
    {
      path: '/about',
      component: PageAbout,
      name: 'About'
    },
    {
      path: '/404',
      component: Page404,
      name: '404'
    },
    {
      path: '/auth',
      component: PageLogin,
      name: 'login'
    },
    {
      path: '*',
      component: Page404,
      name: 'Error'
    },
    
  ]
});

const isAuth = true;
router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && !isAuth) {
    next({ name: 'login'});
  }else{
    next();
  }
});

const getTitleByRouteName = routeName => {
  return {
    'Dashboard': 'Page Dashboard',
    'About': 'Page About',
    '404': 'Not Found'
  }[routeName];
};
router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
});
export default router;
