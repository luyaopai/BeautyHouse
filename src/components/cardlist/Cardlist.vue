<template>
  <div class="brand-wrapper">
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
        :currentno.sync="currentno"
        @jumppage="jumppage"
        @jumptonext="jumptonext"
      />
    </div>
  </div>
</template>

<script>
import Card from '../card/Card.vue';
import Slogan from '../slogan/Slogan.vue';
import './brand.less';
import cosmetic from '../../assets/js/data';
import Pagination from '../pagination/Pagination.vue';

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
      const param = this.$route.params.country;
      const { data } = cosmetic;
      return data.filter((ele) => ele.id === 'brand')[0].detail.filter((ele) => ele.countryid === param);
    },
    totalno() {
      const len = this.brandList.length;
      const tlno = parseInt(len / 16, 10) + ((len % 16) === 0 ? 0 : 1);
      return tlno === 0 ? 1 : tlno;
    },
    showList() {
      return this.brandList.filter((ele, index) => parseInt(index / 16, 10) + 1 === this.currentno);
    },
  },
  methods: {
    jumppage(e) {
      this.currentno = e;
    },
    jumptoprev(e) {
      console.log(e);
      if (this.currentno === 1) {
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
