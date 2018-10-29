import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    }
  ]
})
