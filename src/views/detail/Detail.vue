<style lang="stylus" scoped>

</style>

<template>
  <div>
      <detail-banner 
        :sightName = "sightName"
        :bannerImg = 'bannerImg'
        :gallaryImgs = 'gallaryImgs'

      ></detail-banner>
      <detail-header></detail-header>
      <div class="content">
          <detail-list :list = 'list'></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){ 
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo(){
            axios.get('mock/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetDateSucc)
        },
        handleGetDateSucc(res){
          res = res.data
          if(res.ret && res.data){
              const data = res.data
              console.log(data)
              this.sightName = data.sightName
              this.bannerImg = data.bannerImg
              this.gallaryImgs = data.gallaryImgs
              this.list = data.categoryList
          }  
        }
    },
    mounted(){
        this.getDetailInfo()
    }
    // activated(){//Detail不缓存，每次进入页面度要调用ajax请求  --不执行mounted,执行activated
    //     this.getDetailInfo()
    // }

}
</script>

