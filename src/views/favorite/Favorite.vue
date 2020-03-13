<template>
  <div class="favorite-wrapper">
    <div class="img-wrapper">
      <div class="avatar" />
      <div class="buybtn">
        Buy it
      </div>
    </div>
    <div class="desc-wrapper">
      <div class="text-wrapper">
        <div class="name">
          小黑瓶
        </div>
        <div class="symbol">
          <span>
            lancome
          </span>
          <span>
            精华
          </span>
        </div>
        <p class="desc">
          升级版「小黑瓶」精华肌底液汲取生物技术成分。每一滴精华液蕴含的活性成分较之从前多出40% 此外，全新“小黑瓶”新增的两种复
        </p>
      </div>
      <div class="pics-wrapper">
        <div
          v-for="item in 5"
          :key="item"
          class="pics"
        >
          <img
            src="../../../public/xhp0.jpg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './favorite.less';

export default {
  name: '',
  components: {},
  data() {
    return {

    };
  },
};
</script>

<style scoped>
</style>
