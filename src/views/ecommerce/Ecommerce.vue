<template>
  <div>
    <Cardlist />
  </div>
</template>

<script>
import Cardlist from '../../components/cardlist/Cardlist.vue';
import './ecommerce.less';

export default {
  name: '',
  components: {
    Cardlist,
  },
  data() {
    return {
      list: [],
    };
  },
  beforeCreate() {
  },
};
</script>

<style scoped>
</style>
