import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/brand/china',
  },
  {
    path: '/brand/:country',
    name: 'Brand',
    component: () => import('../views/brand/Brand.vue'),
  },
  {
    path: '/blogger',
    name: 'Blogger',
    component: () => import('../views/blogger/Blogger.vue'),
  }, {
    path: '/ecommerce/:country',
    name: 'Ecommerce',
    component: () => import('../views/ecommerce/Ecommerce.vue'),
  }, {
    path: '/favorite/:type/:category',
    name: 'Category',
    component: () => import('../views/favorite/Favorite.vue'),
  }, {
    path: '/favorite/:type',
    name: 'Favorite',
    component: () => import('../views/favorite/Favorite.vue'),
  }, {
    path: '/tips',
    name: 'Tips',
    component: () => import('../views/tips/Tips.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
