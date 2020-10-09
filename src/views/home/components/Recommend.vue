<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl';
    @import '~@/assets/styles/mixins.styl';
    .recommend-title
        margin-top 20px
        background #eeeeee
        line-height 40px
        text-indent 15px//文字缩进
    .item
        overflow hidden  
        display flex
        border-bottom 1PX solid #ffffff
        .item-img  
            width 70px
            height 70px
            padding 5px
        .item-info 
            flex 1
            margin-left 8px
            display flex 
            flex-direction column
            // justify-content center
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
            .item-button
                width 90px
                color #ffffff
                background #ff9300
                border-radius 3px
                padding 0
                border 0
                margin-top 8px

</style>

<template>
  <div>
      <div class="recommend-title">热搜推荐</div>
      <ul>
          <router-link 
            tag="li" 
            class="item" 
            v-for="item of list"
            :key="item.id"
            :to="'/detail/' + item.id"
          >
              <img class="item-img" :src="item.imgUrl"/>
              <div class="item-info">
                  <span class="item-title">{{item.title}}</span>
                  <span class="item-desc">{{item.desc}}</span>
                  <button class="item-button">查看详情</button>
              </div>
          </router-link>
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
           
        }
    }
}
</script>

