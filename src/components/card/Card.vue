<template>
  <div
    class="card-wrapper"
    @mouseenter="showLabel"
    @mouseleave="hideLabel"
  >
    <a
      :href="detail.address"
      class="card-main"
    >
      <div class="title">
        {{ detail.webname }}
      </div>
      <div
        class="brandlogo"
        :style="{backgroundImage: 'url('+detail.imgname+')'}"
      />
    </a>
    <transition name="slide-fade">
      <div
        v-if="isshow"
        class="card-bottom"
      >
        <span class="label-wrapper">
          {{ detail.desc }}
        </span>
      </div>
    </transition>
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
      isshow: false,
    };
  },
  methods: {
    showLabel() {
      this.isshow = true;
    },
    hideLabel() {
      this.isshow = false;
    },
  },
};
</script>

<style scoped>
</style>
