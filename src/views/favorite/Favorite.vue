<template>
  <div class="favorite-wrapper">
    <div
      v-if="product"
      class="img-wrapper"
    >
      <div
        class="avatar"
        :style="{backgroundImage:'url('+product.avatar+')'}"
      />
      <a
        :href="product.address"
        class="buybtn"
      >
        Buy it
      </a>
    </div>
    <div
      v-if="product"
      class="desc-wrapper"
    >
      <div class="text-wrapper">
        <div class="name">
          {{ product.name }}
        </div>
        <div class="symbol">
          <span
            v-for="item in product.character"
            :key="item"
          >
            {{ item }}
          </span>
        </div>
        <p class="desc">
          简介：{{ product.desc }}
        </p>
        <p class="reason">
          推荐理由：{{ product.reason }}
        </p>
      </div>
      <div class="border-wrapper">
        图片详情
        <hr>
      </div>
      <div class="pics-wrapper">
        <div
          v-for="item in product.pics"
          :key="item"
          class="pics"
        >
          <img
            :src="item"
            alt=""
          >
        </div>
      </div>
    </div>
    <div
      v-if="!product"
      class="fav-blank"
    >
      <Blank />
    </div>
  </div>
</template>

<script>
import Blank from '../../components/blank/Blank.vue';
import './favorite.less';
import datas from '../../assets/js/data';

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
      const { type, category } = this.$route.params;
      const { data } = datas;
      const productlist = data.filter((ele) => ele.id === 'favorite')[0].children.filter((ele) => ele.id === type)[0].children;
      if (category) {
        return productlist.filter((ele) => ele.id === category)[0].children[0];
      }
      return productlist[0].children[0];
    },
  },
};
</script>

<style scoped>
</style>
