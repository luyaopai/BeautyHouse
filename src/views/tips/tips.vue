<template>
  <div class="tips-wrapper">
    <div
      v-if="product"
      class="protect"
    >
      <div class="title">
        如何查化妆品是否在药监局备案
      </div>
      <hr>
      <p>
        <span class="tag">
          1
        </span>
        <span class="words">
          搜索“<a href="http://www.nmpa.gov.cn/">
            国家药品监督管理局
          </a>”如下图所示，进入官网
        </span>
        <img
          src="../../assets/image/tip1.jpg"
          alt=""
        >
      </p>
      <p>
        <span class="tag">
          2
        </span><span class="words">
          选择右侧“化妆品”，点击进入
        </span>
        <img
          src="../../assets/image/tip2.jpg"
          alt=""
        >
      </p>
      <p>
        <span class="tag">
          3
        </span><span class="words">
          左侧选择查询类目
        </span>
        <img
          src="../../assets/image/tip3.jpg"
          alt=""
        >
      </p>
      <p>
        <span class="tag">
          4
        </span><span class="words">
          在搜索框内输入搜索内容即可
        </span>
        <img
          src="../../assets/image/tip4.jpg"
          alt=""
        >
      </p>
      <p>
        <span class="tag">
          5
        </span><span class="words">
          查询结果
        </span>
        <img
          src="../../assets/image/tip5.jpg"
          alt=""
        >
      </p>
    </div>
    <div v-if="!product">
      <Blank />
    </div>
  </div>
</template>

<script>
import datas from '../../assets/js/data';
import Blank from '../../components/blank/Blank.vue';
import './tips.less';

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
