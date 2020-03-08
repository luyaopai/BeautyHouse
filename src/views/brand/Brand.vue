<template>
  <div class="brand-wrapper">
    <div
      v-for="item in brandList"
      :key="item.webname"
    >
      <Card :detail="item" />
    </div>
  </div>
</template>

<script>
import { getBrand } from '../../assets/js/api';
import Card from '../../components/card/Card.vue';
import './brand.less';

export default {
  name: '',
  components: {
    Card,
  },
  data() {
    return {
      brandList: [],
    };
  },
  beforeCreate() {
    getBrand.then((res) => {
      const data = res && res.data.data;
      this.brandList = [...data];
    });
  },
};
</script>

<style scoped>
</style>
