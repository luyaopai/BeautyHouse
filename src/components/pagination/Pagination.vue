<template>
  <div class="pagine-wrapper">
    <div
      class="prev"
      :class="{active:previsactive}"
      @click="jumptoprev"
    >
      prev
    </div>
    <div class="page-container">
      <div
        v-for="item in totalno"
        :key="item"
        class="pager"
        :class="{pageractive: currentno == item}"
        @click="jumpPage(item)"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="next"
      :class="{active:nextisactive}"
      @click="jumptonext"
    >
      next
    </div>
  </div>
</template>

<script>
import './pagination.less';

export default {
  name: '',
  components: {},
  props: {
    totalno: {
      type: Number,
      default() {
        return 1;
      },
    },
    currentno: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  data() {
    return {

    };
  },
  computed: {
    previsactive() {
      return this.currentno === 1;
    },
    nextisactive() {
      return this.currentno === this.totalno;
    },
  },
  methods: {
    jumpPage(page) {
      this.$emit('jumppage', page);
    },
    jumptoprev() {
      if (this.currentno === 1) {
        return false;
      }
      this.$emit('update:currentno', this.currentno - 1);
    },
    jumptonext() {
      if (this.currentno === this.totalno) {
        return false;
      }
      this.$emit('update:currentno', this.currentno + 1);
    },
  },
};
</script>

<style scoped>
</style>
