<template>
  <div class="nav_wrapper">
    <div
      v-for="item in menu"
      :key="item.id"
      class="title"
      @click="linkTO(item.id)"
    >
      {{ item.name }}
    </div>
    <div
      class="collect"
    >
      收藏
    </div>
  </div>
</template>

<script>
import './navmenu.less';

export default {
  name: 'NavMenu',
  components: {},
  props: {
    menu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      list: [
      ],
    };
  },
  methods: {
    linkTO(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
</style>
