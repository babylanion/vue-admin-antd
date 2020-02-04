import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home',
      component: reslove => require(['@/components/Layout.vue'], reslove),
      children: [
        {
          path: '/home',
          component: reslove => require(['@/views/Home/Home.vue'], reslove)
        },
        {
          path: '/page',
          component: reslove => require(['@/views/Page/Page.vue'], reslove)
        }
      ]

    },
    {
      path: '/login',
      name: '登录页',
      component: reslove => require(['@/views/Login/Login.vue'], reslove)
    }
  ]
})
