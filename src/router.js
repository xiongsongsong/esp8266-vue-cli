import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NodeMCU from './views/NodeMCU.vue'
import Setting from './views/Setting.vue'
import System from './views/System.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NodeMCU',
      name: 'NodeMCU',
      component: NodeMCU
    },
    {
      path: '/System',
      name: 'System',
      component: System
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
