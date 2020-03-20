<template>
  <div class="tips-wrapper">
    <div v-if="product">
      <Blank />
    </div>
  </div>
</template>

<script>
import datas from '../../assets/js/data';
import Blank from '../../components/blank/Blank.vue';

export default {
  name: '',
  components: {
    Blank,
  },
  data() {
    return {

    };
  },
  computed: {
    product() {
      const { type } = this.$route.params;
      const { data } = datas;
      return data.filter((ele) => ele.id === 'tips')[0].children.filter((ele) => ele.id === type)[0].children;
    },
  },
};
</script>

<style scoped>
</style>
