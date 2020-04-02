<template>
  <div class="cardlist-wrapper">
    <Slogan class="cardlist-slogn" />
    <div class="cardlist-container">
      <div class="cardlist-list">
        <div
          v-for="item in showList"
          :key="item.id"
        >
          <Card :detail="item" />
        </div>
      </div>
      <Pagination
        class="cardlist-page"
        :totalno="totalno"
        :currentno.sync="currentno"
        @jumppage="jumppage"
      />
    </div>
  </div>
</template>

<script>
import cosmetic from '../../assets/js/data';
import Card from '../card/Card.vue';
import Slogan from '../slogan/Slogan.vue';
import Pagination from '../pagination/Pagination.vue';
import './cardlist.less';

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
    cardlist() {
      const param = this.$route.params.country;
      const id = this.$route.path.match(/\w+/)[0];
      const { data } = cosmetic;
      Object.freeze(data);
      const list = data.filter((ele) => ele.id === id)[0].children;
      return list.filter((ele) => ele.id === param)[0].children;
    },
    totalno() {
      const len = this.cardlist.length;
      const tlno = parseInt(len / 16, 10) + ((len % 16) === 0 ? 0 : 1);
      return tlno === 0 ? 1 : tlno;
    },
    showList() {
      return this.cardlist.filter((ele, index) => parseInt(index / 16, 10) + 1 === this.currentno);
    },
  },
  methods: {
    jumppage(e) {
      this.currentno = e;
    },
  },
};
</script>

<style scoped>
</style>
