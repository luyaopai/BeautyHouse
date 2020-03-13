<template>
  <div
    class="blank-wrapper"
  >
    <div class="lipstick" />
    <div class="blankmeg">
      <p>Sorry,</p>
      <p>暂无推荐。</p>

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
