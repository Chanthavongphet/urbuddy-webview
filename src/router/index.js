import Vue from 'vue'
import VueRouter from 'vue-router'
import Writefeedback from '../views/feedback/Writefeedback.vue'
import Readfeedback from '../views/feedback/Readfeedback.vue'
import Myprofile from '@/views/profile/myprofile.vue'
import Historytask from '@/views/profile/historytask'
import uncompletedVue from '@/views/profile/uncompleted.vue'
import taskinfo from '@/views/profile/dothetask/taskinfo.vue'
import schedule from '@/views/profile/dothetask/schedule.vue'
import mycompany from '@/views/profile/mycompany.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/writefeedback',
    name: 'writefeedback',
    component: Writefeedback
  },
  {
    path: '/mycompany',
    name: 'mycompany',
    component: mycompany
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: schedule
  },
  {
    path: '/taskinfo',
    name: 'taskinfo',
    component: taskinfo
  },
  {
    path: '/uncompleted',
    name: 'uncompleted',
    component: uncompletedVue
  },
  {
    path: '/',
    name: 'myprofile',
    component: Myprofile
  },
  {
    path: '/history',
    name: 'Historytask',
    component: Historytask
  },
  {
    path: '/readfeedback',
    name: 'readfeedback',
    component: Readfeedback
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
