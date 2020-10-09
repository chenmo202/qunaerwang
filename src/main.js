import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { Lazyload } from 'vant';
import 'swiper/dist/css/swiper.css'
import 'vant/lib/index.css';
import './assets/styles/iconfont.css'
Vue.use(Vant);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(VueAwesomeSwiper)

Vue.prototype.$sxios = axios
Vue.config.productionTip = false
// axios.defaults.baseURL = '/api'

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
