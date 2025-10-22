import { Toast } from 'vant'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/register.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    redirect: '/home/article',
    children: [
      {
        path: 'article',
        component: () => import('@/views/layout/article.vue')
      },
      {
        path: 'collect',
        component: () => import('@/views/layout/collect.vue')
      },
      {
        path: 'like',
        component: () => import('@/views/layout/like.vue')
      },
      {
        path: 'history',
        component: () => import('@/views/layout/history.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/layout/user.vue')
      }
    ]
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue')
  }

]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  })
}

const router = new VueRouter({
  routes
})

const allow = ['/login', '/register', '/home/article', '/detail', '/home/user']
router.beforeEach((to, from, next) => {
  if (allow.includes(to.path)) {
    next()
  } else {
    const token = window.localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // next('/login')
      Toast.fail('请先登录')
    }
  }
})

export default router
