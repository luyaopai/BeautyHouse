<template>
  <div class="card-wrapper">
    <a
      :href="detail.address"
      class="card-main"
    >
      <div class="title">
        <!-- {{ detail.webname }} -->
      </div>
      <div class="logo">
        <img
          :src="detail.img"
          alt=""
        >
      </div>
    </a>
    <div class="card-bottom">
      <div class="label-wrapper">
        <span>
          {{ detail.desc }}
        </span>
        <!-- <span
          v-for="item in detail.label"
          :key="item"
          class="label"
          :style="{background:randomcolor}"
        >
          {{ item }}
        </span> -->
      </div>
      <!-- <div class="collect">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-huabanfuben" />
        </svg>
      </div> -->
    </div>
  </div>
</template>

<script>
import './card.less';

export default {
  name: '',
  components: {},
  props: {
    detail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {

    };
  },
  computed: {
    randomcolor() {
      return `#${Math.floor(Math.random() * 0x222222).toString(16)}`;
    },
  },
};
</script>

<style scoped>
</style>
