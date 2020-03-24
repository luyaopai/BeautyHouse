<template>
  <div class="home">
    <div class="backdrop-wrapper">
      <div class="leftup_top" />
      <div class="rightup_top" />
      <div class="leftdown_top" />
      <div class="rightdown_top" />
      <div class="contain-wrapper">
        <div class="home-top">
          <Logo class="home-logo" />
          <NavMenu
            :menu="navList"
            class="home-nav"
          />
        </div>
        <div
          v-if="home"
        >
          <Carousel
            :imglist="imglist"
          />
        </div>
        <div v-if="!home">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './home.less';
import NavMenu from '../../components/navmeau/NavMenu.vue';
import Logo from '../../components/logo/Logo.vue';
import Carousel from '../../components/carousel/Carousel.vue';
import cosmetic from '../../assets/js/data';

export default {
  name: 'Home',
  components: {
    NavMenu, Logo, Carousel,
  },
  data() {
    return {
      navList: [],
      brandList: [],
      // home: true,
      imglist: [
        require('../../assets/image/web/lunbo0.jpg'),
        require('../../assets/image/web/lunbo1.jpg'),
        require('../../assets/image/web/lunbo2.png'),
      ],
    };
  },
  computed: {
    home() {
      const { path } = this.$route;
      return path === '/';
    },
  },
  beforeMount() {
    const { data } = cosmetic;
    data.forEach((ele) => {
      this.navList.push({ id: ele.id, name: ele.name, children: ele.children });
    });
  },
};
</script>

<style scoped>
</style>
