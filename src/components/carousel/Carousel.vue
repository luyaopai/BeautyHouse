<template>
  <div class="carousel-wrapper">
    <el-carousel
      :interval="4000"
      height="54rem"
    >
      <el-carousel-item
        v-for="item in imglist"
        :key="item"
      >
        <div
          :style="{backgroundImage:'url('+item+')'}"
        >
          <img
            :src="item"
            alt=""
          >
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import './carousel.less';

export default {
  name: '',
  components: {

  },
  props: {
    imglist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
</style>
