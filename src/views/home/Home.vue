<template>
  <div class="home">
    <div class="backdrop-wrapper">
      <div class="leftup_top" />
      <div class="rightup_top" />
      <div class="leftdown_top" />
      <div class="rightdown_top">
        <div class="bgimg">
          <img
            src="../../../public/hzb.png"
            alt=""
          >
        </div>
      </div>
      <div class="contain-wrapper">
        <div class="home-top">
          <Logo class="home-logo" />
          <NavMenu
            :menu="navList"
            class="home-nav"
          />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import './home.less';
import NavMenu from '../../components/navmeau/NavMenu.vue';
import Logo from '../../components/logo/Logo.vue';
import cosmetic from '../../assets/js/data';

export default {
  name: 'Home',
  components: {
    NavMenu, Logo,
  },
  data() {
    return {
      navList: [],
      brandList: [],
    };
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
