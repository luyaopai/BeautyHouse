import Vue from 'vue';
import {
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import 'element-ui/lib/theme-chalk/base.css';
import App from './App.vue';
import router from './router';
import store from './store';
import css from './assets/css/reset.css';
import iconfont from './assets/js/iconfont';

Vue.config.productionTip = false;
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.component(CollapseTransition.name, CollapseTransition);

new Vue({
  router,
  store,
  css,
  iconfont,
  render: (h) => h(App),
}).$mount('#app');
