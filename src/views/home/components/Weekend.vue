<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl';
    @import '~@/assets/styles/mixins.styl';
    .recommend-title
        margin-top 20px
        background #eeeeee
        line-height 40px
        text-indent 15px//文字缩进
   
    .item-img  
        width 100%
        height 150px
    .item-info 
        display flex 
        flex-direction column
        min-width 0
        .item-title
            color red
            ellipsis()
            font-size 18px
        .item-desc
            color #cccccc
            ellipsis() 
            font-size 14px
            margin-top 5px   
</style>

<template>
  <div>
      <div class="recommend-title">周末去哪儿</div>
      <ul>
          <li 
            style="margin-bottom:10px"
            class="item" 
            v-for="item of list"
            :key="item.id"
          >
              <img class="item-img" :src="item.imgUrl"/>
              <div class="item-info">
                  <span class="item-title">{{item.title}}</span>
                  <span class="item-desc">{{item.desc}}</span>
              </div>
          </li>
      </ul>
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
    data(){
        return{
            // recommendList:[
            //     {
            //         id:'0001',
            //         imgUrl:'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
            //         title:'大连圣亚海洋世界',
            //         desc:'浪漫大连首站，浪漫的海洋主题乐园'
            //     },
            //     {
            //         id:'0002',
            //         imgUrl:'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
            //         title:'大连圣亚海洋世界',
            //         desc:'浪漫大连首站，浪漫的海洋主题乐园'
            //     },
            //     {
            //         id:'0003',
            //         imgUrl:'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
            //         title:'大连圣亚海洋世界',
            //         desc:'浪漫大连首站，浪漫的海洋主题乐园'
            //     },
            //     {
            //         id:'0004',
            //         imgUrl:'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
            //         title:'大连圣亚海洋世界',
            //         desc:'浪漫大连首站，浪漫的海洋主题乐园'
            //     },
            //     {
            //         id:'0005',
            //         imgUrl:'https://img1.qunarzz.com/travel/poi/1804/f8/654d1576a7497d37.jpg',
            //         desc:'浪漫大连首站，浪漫的海洋主题乐园'
            //     }
            // ]
        }
    }
}
</script>
