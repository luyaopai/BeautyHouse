<template>
  <div class="nav_wrapper">
    <div
      v-for="(item1,index1) in menu"
      :key="item1.id"
      class="title"
      @mouseover="showType(index1)"
      @mouseout="hideType"
    >
      <div
        class="navname"
        @click="linkTO(item1.id,item1.type[0].country)"
      >
        {{ item1.name }}
      </div>
      <ul
        v-if="isclicktype===index1"
        class="clicktype"
        @mouseover="showType(index1)"
      >
        <li
          v-for="item2 in item1.type"
          :key="item2.country"
          class="typesingle"
          @click="linkTO(item1.id,item2.country)"
        >
          {{ item2.countryname }}
        </li>
      </ul>
    </div>
    <div
      class="collect"
    >
      Favorite
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
      list: [],
      isclicktype: -1,
      hidelist: {},
    };
  },
  methods: {
    linkTO(path, type) {
      this.$router.push(`/${path}/${type}`);
      this.isclicktype = -1;
    },
    showType(idx) {
      if (this.hidelist) {
        clearTimeout(this.hidelist);
      }
      this.isclicktype = idx;
    },
    hideType() {
      this.hidelist = setTimeout(() => {
        this.isclicktype = -1;
      }, 800);
    },
  },
};
</script>

<style scoped>
</style>
