<template>
  <div class="home">
    <div class="backdrop-wrapper">
      <div class="leftup_top">
        <Logo />
      </div>
      <div class="rightup_top">
        <NavMenu
          :menu="navList"
          class="nav"
        />
      </div>
      <div class="leftdown_top" />
      <div class="rightdown_top" />
      <div class="contain-wrapper">
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
      this.navList.push({ id: ele.id, name: ele.name, type: ele.type });
    });
  },
  methods: {
    // opentype(e) {

    // },
  },
};
</script>

<style scoped>
</style>
