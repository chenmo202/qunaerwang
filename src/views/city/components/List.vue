<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl'//在css里面引入其他的css,用~@
    // .border-bottom
    //     &:before
    //         border-color #ccc
    //     &:after
    //         border-color #ccc 
    .list
        width 100%
        // height 100%
        position absolute
        overflow hidden
        top 95px
        left 0
        right 0
        bottom 0
        .content 
            overflow hidden
            min-height: 100%;
            .title
                line-height 35px
                background #eeeeee
                padding-left 15px
                font-size 16px
                border-bottom 1px solid #cccccc 
            .button-list 
                overflow hidden
                padding 5px 30px 5px 10px
                display flex
                flex-wrap wrap
                .button-wrapper
                    box-sizing border-box
                    width 33.33%
                .button 
                    margin 5px
                    padding 5px 0
                    text-align center
                    border 1px solid #ccc 
                    border-radius 3px 
            .item-list
                .item 
                    padding-left 15px 
                    line-height 40px 
                    border-bottom 1px solid #cccccc     
</style>

<template>
    <div class="list" ref ="wrapper">
        <div class="content">
            <div class="area">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrapper"
                        v-for = "item of hot"
                        :key= "item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" 
                v-for = "(item , key) of cit" 
                :key= "key"
                :ref= "key"
            >
                <div class="title">{{key}}</div>
                <ul class="item-list">
                    <li class="item" 
                        v-for= "innerItem of item" 
                        :key= "innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
export default {
    props:{
        hot: Array,
        cit: Object,
        letter: String
    },
    methods: {
        handleCityClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
        }
    },
    mounted(){//mounted--dom挂载完毕之后执行
       this.scroll = new Bscroll(this.$refs.wrapper, {
           click: true,
           scrollY: true,
           observeDOM: true // 开启 observe-dom 插件
           
       }) 
    },
    watch: {
        letter () {
            // console.log(this.letter)
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                // console.log(element)
                this.scroll.scrollToElement(element)                
            }
            
        }
    }
}
</script>