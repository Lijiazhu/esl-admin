import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/views/ESLHome/welcome/homepage'
import HomeHeader from '@/views/ESLHome/welcome/homeheader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/header',
      name: 'HomeHeader',
      component: HomeHeader
    }
  ]
})
