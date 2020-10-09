<style lang="stylus" scoped>
    @import '~@/assets/styles/variables.styl'//在css里面引入其他的css,用~@
    .list
        position absolute
        top 95px
        right 0
        bottom 0
        display flex
        flex-direction column
        justify-content center
        width 20px
        .item
            line-height 20px
            text-align center
            color $bgColor
</style>

<template>
    <!-- touchstart---当手指触摸屏幕时触发 -->
    <!-- touchmove---手指触摸后移动 -->
    <!-- touchend---手指触摸动作结束 -->
     <!-- v-for="(item , key) of cities" 
            :key= "key" -->
    <ul class="list">
        <li 
            class="item" 
            v-for="item  of letters" 
            :key= "item"
            :ref= "item"
            @touchstart = "handleTouchStart"
            @touchmove = "handleTouchMove"
            @touchend = "handleTouchEnd"
            @click = "handleLetterClick"
        >   
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        cities:Object
    },
    computed: {
        letters () {
            const letters = [];
            for(let i in this.cities){//把对象循环放入leters数组里面
                letters.push(i)
            }
            return letters;
        }
    },
    data(){
        return{
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
            // console.log(e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {//事件对象里面有个touches，touches[0]--代表的是手指的地方
            if(this.touchStatus){//startY--起始坐标  offsetTop--该方法返回元素边界的左上角顶点相对于有定位的父元素的上下偏移量
                if(this.timer = true){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() =>{//用定时器实现函数节流，大大节约了handleTouchMove这个函数的执行频率
                    // const startY = this.$refs['A'][0].offsetTop //A到头部的偏移距离
                    const touchY = e.targetTouches[0].clientY -95  //字母列表第一项到头部下面的距离
                    const index =   Math.floor((touchY-this.startY) / 20)
                    // console.log(index)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },100)
                    
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
   
}
</script>