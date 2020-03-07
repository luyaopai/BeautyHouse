import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import css from './assets/css/reset.css';
import iconfont from './assets/js/iconfont';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  css,
  iconfont,
  render: (h) => h(App),
}).$mount('#app');
