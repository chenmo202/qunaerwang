<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  @import '~@/assets/styles/mixins.styl';

.icons 
  overflow: hidden
  display: flex
  flex-wrap: wrap

  .icon 
    width: 25%;
    display: flex
    // flex-wrap: wrap
    flex-direction: column
    align-items: center
    // justify-content: center
    padding-top: 10px

    .icon-img 
      width: 60px
      height: 60px

      .icon-img-content 
        width: 100%
        height: 100%
    .icon-desc 
      margin-top 10px
      min-width 0
      $bgColor
      ellipsis()
</style>

<template>
  <swiper :options="swiperOption">
    <swiper-slide class="icons" v-for="(page,index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" />
        </div>

        <div class="icon-desc">{{item.desc}}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props:{
    list:Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper
    // },
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  mounted() {
     
  }
};
</script>

