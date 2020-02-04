import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Collect from '@/components/Collect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Collect',
      component: Collect
    },
    {
      path:'/Collect',
      name:'Collect',
      component: Collect
    },
    
  ]
})
