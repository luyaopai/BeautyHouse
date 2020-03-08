<template>
  <div class="nav_wrapper">
    <div
      v-for="item in list"
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
import { getCosmetic } from '../../assets/js/api';
import './navmenu.less';

export default {
  name: 'NavMenu',
  components: {},
  data() {
    return {
      list: [
      ],
    };
  },
  beforeCreate() {
    getCosmetic.then((res) => {
      const data = res && res.data.data;
      this.list = [...data];
    });
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
