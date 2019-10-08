import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log('bf enter')
        next()
      }
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import(/* webpackChunkName: "about" */ './views/sign.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about2',
      component: () => import('./views/About2.vue')
    },
    {
      path: '/lectures/card',
      component: () => import('./views/lectures/card.vue')
    },
    {
      path: '/lectures/layout',
      component: () => import('./views/lectures/layout.vue')
    },
    {
      path: '/lectures/notes',
      component: () => import('./views/lectures/notes.vue')
    },
    {
      path: '/lectures/axios',
      component: () => import('./views/lectures/axios.vue')
    },
    {
      path: '/lectures/mother',
      component: () => import('./views/lectures/mother.vue')
    },
    {
      path: '/lectures/vuex',
      component: () => import('./views/lectures/vuex.vue')
    },
    {
      path: '*',
      component: () => import('./views/e404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('bf each')
  if(Vue.prototype.$isFirebaseAuth) next() 
})

// router.afterEach((to, from, next) => {
//   console.log('af each')
//   next() 
// })

export default router
