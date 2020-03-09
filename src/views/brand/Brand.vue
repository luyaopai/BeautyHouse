<template>
  <div class="brand-wrapper">
    <Slogan class="brand-slogn" />
    <div class="brand-container">
      <div class="brand-list">
        <div
          v-for="item in brandList"
          :key="item.webname"
        >
          <Card :detail="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/card/Card.vue';
import Slogan from '../../components/slogan/Slogan.vue';
import './brand.less';
import cosmetic from '../../assets/js/data';

export default {
  name: '',
  components: {
    Card, Slogan,
  },
  data() {
    return {
    };
  },
  computed: {
    brandList() {
      const { data } = cosmetic;
      return data.filter((ele) => ele.id === 'brand')[0].detail;
    },
  },
};
</script>

<style scoped>
</style>
