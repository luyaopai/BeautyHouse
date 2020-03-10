<template>
  <div class="brand-wrapper">
    <Slogan class="brand-slogn" />
    <div class="brand-container">
      <div class="brand-list">
        <div
          v-for="item in showList"
          :key="item.webname"
        >
          <Card :detail="item" />
        </div>
      </div>
      <Pagination
        class="brand-page"
        :totalno="totalno"
        :currentno="currentno"
        @jumppage="jumppage"
        @jumptoprev="jumptoprev"
        @jumptonext="jumptonext"
      />
    </div>
  </div>
</template>

<script>
import Card from '../../components/card/Card.vue';
import Slogan from '../../components/slogan/Slogan.vue';
import './brand.less';
import cosmetic from '../../assets/js/data';
import Pagination from '../../components/pagination/Pagination.vue';

export default {
  name: '',
  components: {
    Card, Slogan, Pagination,
  },
  data() {
    return {
      currentno: 1,
    };
  },
  computed: {
    brandList() {
      const { data } = cosmetic;
      return data.filter((ele) => ele.id === 'brand')[0].detail;
    },
    totalno() {
      const len = this.brandList.length;
      return parseInt(len / 12, 10) + ((len % 12) === 0 ? 0 : 1);
    },
    showList() {
      return this.brandList.filter((ele, index) => parseInt(index / 12, 10) + 1 === this.currentno);
    },
  },
  methods: {
    jumppage(e) {
      this.currentno = e;
    },
    jumptoprev(e) {
      if (e === 1) {
        return false;
      }
      this.currentno -= 1;
    },
    jumptonext(e) {
      if (e === this.totalno) {
        return false;
      }
      this.currentno += 1;
    },
  },
};
</script>

<style scoped>
</style>
