<template>
  <div
    class="blank-wrapper"
  >
    <div class="blankmeg">
      <p>页面正在加紧开发...</p>
      <div
        class="gohome"
        @click="gohome"
      >
        主页
      </div>
    </div>
  </div>
</template>

<script>
import './blank.less';

export default {
  name: '',
  components: {},
  data() {
    return {

    };
  },
  methods: {
    gohome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
</style>
