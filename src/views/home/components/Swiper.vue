<style lang="stylus" scoped>
    .banner{
        width 100%
    }
    .my-swipe_l {
      width: 100%;
      height: 150px;
      overflow: hidden;
   }
    .van-swipe__track .swipe_img{
      width: 100%;
      height: 100%;
    }

    >>>.van-swipe__indicator:not(:last-child) {
        margin-right: 3px;
    }

    >>>.van-swipe__indicator {
        width: 8px;
        height: 8px;
        // border-radius: 100%;
    }

    >>>.van-swipe__indicators {
        bottom: 10px;
    }
</style>

<template>
    <div class="banner">
        <van-swipe class="my-swipe_l" 
            :autoplay="3000" 
            indicator-color="white"
            v-if="showSwiper"
        >
            <van-swipe-item class="swipe_item" v-for="item in list" :key="item.id">
                <img v-lazy="item.imgUrl" class="swipe_img"/>
            </van-swipe-item>
        </van-swipe>
        <div>{{obj.abbb}}</div>
    </div>
</template>

<script>
export default {
    props:{
        list: {
            type: Array,
            default: () => []
        },
        obj: {
            type: Object,
            default: () => {
               return {}
            }
        }
    },
    data() {
        return {
            // images: [
            //     require('../../../assets/images/slideshow/lunbo01.jpg'),
            //     require('../../../assets/images/slideshow/lunbo02.jpg'),
            //     require('../../../assets/images/slideshow/lunbo03.jpg'),
            //     require('../../../assets/images/slideshow/lunbo04.jpg')
            // ]
        }
    },
    computed:{
        showSwiper() {
            return this.list.length
        }
    }
}
</script>


