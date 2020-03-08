<template>
  <div class="ecommerce-wrapper">
    <div
      v-for="item in list"
      :key="item.webname"
    >
      <Card :detail="item" />
    </div>
  </div>
</template>

<script>
import Card from '../../components/card/Card.vue';
import { getEcommerce } from '../../assets/js/api';
import './ecommerce.less';

export default {
  name: '',
  components: {
    Card,
  },
  data() {
    return {
      list: [],
    };
  },
  beforeCreate() {
    getEcommerce.then((res) => {
      const data = res && res.data.data;
      this.list = [...data];
    });
  },
};
</script>

<style scoped>
</style>
