<style lang="stylus" scoped>
    //@import '../../../assets/styles/variables.styl'//样式里面引入全局的变量，要用@符
    @import '~@/assets/styles/variables.styl'//在css里面引入其他的css,用~@
    .header
        display: flex
        align-items:center
        height: $headerHeight
        background: $bgColor
        color: #ffffff
        .headrer-left
            float: left
            margin-left:10px
            .back-icon
                font-size:20px 
        .headrer-input
            display: flex 
            align-items:center
            flex: 1  
            height: 35px 
            border-radius:5px 
            background: #ffffff
            margin-left: 10px
            color: #cccccc
            .search
                padding: 5px
        .headrer-right
            float: right
            margin:0 10px 0 10px
            color #ffffff
            .arrow-icon
                margin-left:-2px
                font-size:14px
</style>

<template>
  <div class="header">
      <div class="headrer-left">
          <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="headrer-input">
          <span class="iconfont search">&#xe632;</span>
          输入城市/景点/游玩主体
      </div>
      <router-link to="/city">
        <div class="headrer-right">
            {{this.$store.state.city}}
            <span class="iconfont arrow-icon">&#xe62c;</span>
        </div>
      </router-link>  
  </div>
</template>

<script>
export default {
    props:{
        city:String
    }

}
</script>

