<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl'//样式里面 引入全局的变量，要用@符
    .header
        display flex
        align-items center
        justify-content center
        height $headerHeight
        color #ffffff
        background $bgColor
        font-size 18px
        position relative
        .header-back
            position absolute 
            left 15px
            font-size 20px
            
</style>

<template>
  <div class="header">
      城市选择
      <div class="iconfont header-back" @click="goback">&#xe624;</div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
       goback(){
           this.$router.go(-1)
       }
    }
}
</script>

