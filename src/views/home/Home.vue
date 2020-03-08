<template>
  <div class="home">
    <div class="backdrop_wrapper">
      <div class="leftup_bottom" />
      <div class="rightup_bottom" />
      <div class="down_bottom" />
      <div class="leftup_top">
        <div class="logo">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-shuye" />
          </svg>
          <div class="title">
            BeautyHouse
          </div>
        </div>
        <div class="slogan">
          The best part of beauty
          <br>is that which no picture can express.
        </div>
      </div>
      <div class="rightup_top">
        <NavMenu />
        <router-view />
      </div>
      <div class="leftdown_top">
        1
      </div>
      <div class="rightdown_top">
        1
      </div>
    </div>
  </div>
</template>

<script>
import './home.less';
import NavMenu from '../../components/navmeau/NavMenu.vue';

export default {
  name: 'Home',
  components: {
    NavMenu,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
</style>
