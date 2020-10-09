<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl'//在css里面引入其他的css,用~@
    .search
        height: 45px
        background: $bgColor
        display flex
        align-items center
        padding 0px 5px
        .search-input
            width 100%
            height 30px
            border-radius 5px
            border 0 
            padding 0 5px
            text-align center
            color #66666
    .search-content  
        position absolute 
        width 100%
        height 100%
        // height 572px
        top 95px
        left 0
        right 0
        bottom 0
        background #eeeeee
        z-index 1  
        overflow hidden
        .search-content-ul {
            overflow hidden
            min-height: 100%;
        }
        .search-item
            padding-left 15px 
            line-height 40px 
            border-bottom 1px solid #cccccc
            color #66666  
            background #ffffff 
</style>

<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>
        <div 
            class="search-content" 
            v-show= "keyword"
        >
            <ul class="search-content-ul">
                <li 
                    class="search-item"
                    v-for="(item,key) of list"
                    :key="key"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import Bscroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
export default {
    props:{
        cit:Object
    },
    data(){
        return{
            keyword: '',
            list: [],
            timer: null
        }
    },
    mounted () {
        this.scroll = new Bscroll('.search-content',{
            click: true,
            scrollY: true,
            observeDOM: true // 开启 observe-dom 插件
        }) 
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
            // alert(city)
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if( !this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cit){
                    this.cit[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword)>-1 ||
                           value.name.indexOf(this.keyword) >-1 )
                        {
                           result.push(value) 
                        }
                    })
                    this.list = result
                }
            },100) 
        }
    },
    computed:{
        hasNoData () {
            return !this.list.length
        }
    }

}
</script>

