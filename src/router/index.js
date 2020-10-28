import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
// import City from '../views/city/City.vue'
// import Detail from '../views/detail/Detail.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import(/* webpackChunkName: "about" */ '../views/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
    },
    {
      path:'/search',
      name:'Search',
      component: () => import('../views/search/Search.vue')

    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {//进入新页面初始化在顶部显示   
    return { x: 0, y: 0 } 
  }
})
export default router
