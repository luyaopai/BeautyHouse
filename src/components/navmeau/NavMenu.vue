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
        :class="{active:isclicknav===index1,}"
        @click="linkTO(item1.id,item1.children[0].id,index1)"
      >
        {{ item1.name }}
      </div>
      <ul
        v-if="isclicktype===index1"
        class="clicktype"
        @mouseover="showType(index1)"
      >
        <li
          v-for="(item2,index2) in item1.children"
          :key="item2.id"
          class="typesingle"
          @click.stop="linkTO(item1.id,item2.id,index1)"
          @mouseover="showtypeTwo(index2)"
          @mouseout="hidetypeTwo"
        >
          {{ item2.name }}
          <div
            v-if="item1.id==='favorite' && isclicktypetwo === index2"
            class="clicktypetwosingle"
          >
            <div
              v-for="item3 in item2.children"
              :key="item3.id"
              class="typetwosingle"
            >
              {{ item3.name }}
            </div>
          </div>
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
      isclicktype: -1,
      hidelist: {},
      isclicknav: 0,
      isclicktypetwo: -1,
    };
  },
  methods: {
    linkTO(path, type, idx) {
      console.log(path, type, idx);
      this.$router.push(`/${path}/${type}`);
      this.isclicktype = -1;
      this.isclicknav = idx;
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
      }, 500);
    },
    showtypeTwo(idx) {
      if (this.hideTwo) {
        clearTimeout(this.hideTwo);
      }
      this.isclicktypetwo = idx;
    },
    hidetypeTwo() {
      this.hideTwo = setTimeout(() => {
        this.isclicktypetwo = -1;
      }, 500);
    },
  },
};
</script>

<style scoped>
</style>
