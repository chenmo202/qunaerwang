<style lang="stylus" scoped>
    .container 
        height 100%
    
</style>

<template>
  <div class="container">
      <city-header></city-header>
      <city-search :cit="cities"></city-search>
      <city-list 
            :hot="hotCities" 
            :cit="cities"
            :letter="letter"
      ></city-list>
      <city-alphabet 
            :cities= "cities"
            @change = "handleLetterChange"
      ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '../city/components/Header'
import CitySearch from '../city/components/Search'
import CityList from '../city/components/List'
import CityAlphabet from '../city/components/Alphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter: ''
        }
    },
    beforeCreate(){
        document.querySelector('body').setAttribute('style','background-color:#F5F6FA')
    },
    methods:{
        getCityInfo(){
            axios.get('mock/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
            console.log(res)
        },
        handleLetterChange(letter){
            this.letter = letter
            // console.log(letter)
        }
    },
    mounted(){
        this.getCityInfo()
    }
    
}
</script>

