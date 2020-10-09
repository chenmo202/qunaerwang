<template>
  <div id="app" :style="{'height':height}">
    <keep-alive exclude="Detail">//exclude="Detail" DEtail页面不缓存了
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      height:''
    }
  },
  mounted(){
    this.height = window.innerHeight + "px"
  }
}
</script>

<style lang="stylus">

</style>
