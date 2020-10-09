import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '广州'
  },
  actions: {
    changeCity(ctx,city){//没有执行异步操作，比较简单的可以省略actions
      // console.log(city)
      ctx.commit('changeCity',city)
    }
  },
  mutations: {
    changeCity(state,city){
      state.city = city
      localStorage.city = city
    }
  },
  modules: {
  }
})
