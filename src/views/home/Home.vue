<style lang="stylus" scoped>
  .container
    width:100%
    height:100%
</style>

<template>
  <div class="container">
    <home-header></home-header>
    <home-swiper :list = "swiperList"></home-swiper>
    <home-icons :list = "iconList"></home-icons>
    <home-recommend :list = "recommendList"></home-recommend>
    <home-weekend :list = "weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  data(){
    return{
      swiperList: [],
      iconList: [],
      recommendList:[],
      weekendList:[]
    }
  },
  beforeCreate(){//初始化之前 设置单页面背景色 setAttribute() -- 把指定属性设置或者修改为指定的值
			document.querySelector('body').setAttribute('style','background-color:#F5F6FA')		
	},			
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods:{
    getHomeInfo(){
      axios.get('mock/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted(){
    this.getHomeInfo() 
  }
  // created(){
  //   axios.get('aiqiyi.json').then((res)=>{
  //     console.log(res);
  //   })
  // }
  
}
</script>
