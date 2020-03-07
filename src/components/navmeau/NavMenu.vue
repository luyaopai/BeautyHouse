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
    <div class="collect">
      收藏
    </div>
  </div>
</template>

<script>
import './navmenu.less';

export default {
  name: 'NavMenu',
  components: {},
  data() {
    return {
      list: [
        { name: '品牌官网', id: 'brand' },
        { name: '电商平台', id: 'e-commerce' },
        { name: '单品好物', id: 'favorite' },
        { name: '知名博主', id: 'blogger' },
        { name: '护肤技巧', id: 'tips' },
      ],
    };
  },
};
</script>

<style scoped>
</style>
