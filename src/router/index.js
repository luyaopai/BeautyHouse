import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/brand/:country',
    name: 'Brand',
    component: () => import('../views/brand/Brand.vue'),
  },
  {
    path: '/blogger/:type',
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
    path: '/tips/:type',
    name: 'Tips',
    component: () => import('../views/tips/Tips.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
