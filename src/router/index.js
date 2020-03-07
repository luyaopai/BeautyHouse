import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('../views/brand/Brand.vue'),
  },
  {
    path: '/blogger',
    name: 'Blogger',
    component: () => import('../views/blogger/blogger.vue'),
  }, {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: () => import('../views/ecommerce/Ecommerce.vue'),
  }, {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/favorite/Favorite.vue'),
  }, {
    path: '/tips',
    name: 'Tips',
    component: () => import('../views/tips/tips.vue'),
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
