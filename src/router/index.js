import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// export default ({
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: () => import( /*webpackChunkName: "PageDashboard"*/ '../pages/PageDashboard'),
      name: 'PageDashboard'
    },
    {
      path: '/add/patment/:category/',
      component: () => import( /*webpackChunkName: "AddDataFromUrl"*/ '../components/AddPaymentForm'),
      // component: PageDashboard,
      name: 'AddDataFromUrl'
    },
    {
      path: '/dashboard',
      component: () => import( /*webpackChunkName: "Dashboard"*/ '../pages/PageDashboard'),
      // component: PageDashboard,
      name: 'Dashboard'
    },
    {
      path: '/dashboard/:page',
      component: () => import( /*webpackChunkName: "Login"*/ '../pages/PageDashboard'),
      // component: PageDashboard,
      name: 'DashboardPageNumber'
    },
    {
      path: '/food',
      component: () => import( /*webpackChunkName: "PageFoodCategory"*/ '../pages/PageFoodCategory'),
      // component: PageFoodCategory,
      name: 'PageFoodCategory'
    },
    // {
    //   path: '/transport',
    //   component: () => import( /*webpackChunkName: "PageTransportCategory"*/ '../pages/PageTransportCategory'),
    //   // component: PageTransportCategory,
    //   name: 'PageTransportCategory'
    // },
    // {
    //   path: '/entertainment',
    //   component: () => import( /*webpackChunkName: "PageEntertainmentCategory"*/ '../pages/PageEntertainmentCategory'),
    //   // component: PageEntertainmentCategory,
    //   name: 'PageEntertainmentCategory'
    // },
    {
      path: '/about',
      component: () => import( /*webpackChunkName: "About"*/ '../pages/PageAbout'),
      // component: PageAbout,
      name: 'About'
    },
    {
      path: '/404',
      component: () => import( /*webpackChunkName: "404"*/ '../pages/Page404'),
      // component: Page404,
      name: '404'
    },
    {
      path: '/auth',
      component: () => import( /*webpackChunkName: "Login"*/ '../pages/PageLogin'),
      // component: PageLogin,
      name: 'login'
    },
    {
      path: '*',
      component: () => import( /*webpackChunkName: "Error"*/ '../pages/Page404'),
      // component: Page404,
      name: 'Error'
    },

  ]
});

// const isAuth = true;
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !isAuth) {
//     next({
//       name: 'login'
//     });
//   } else {
//     next();
//   }
// });

// const getTitleByRouteName = routeName => {
//   return {
//     'Dashboard': 'Page Dashboard',
//     'About': 'Page About',
//     '404': 'Not Found'
//   } [routeName];
// };
// router.afterEach((to) => {
//   document.title = getTitleByRouteName(to.name);
// });
export default router;