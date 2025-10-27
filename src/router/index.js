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
        component: () => import('@/views/history.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/layout/user.vue')
      },
      {
        path: 'notify',
        component: () => import('@/views/notify.vue')
      }
    ]
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue')
  }

]

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated' || err.name === 'NavigationDuplicated') {
      return Promise.resolve()
    }
    return Promise.reject(err)
  })
}

VueRouter.prototype.replace = function replace (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated' || err.name === 'NavigationRedirected') {
      return Promise.resolve()
    }
    return Promise.reject(err)
  })
}

const router = new VueRouter({
  routes
})

const allowList = ['/login', '/register', '/home/article', '/detail']
router.beforeEach(async (to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (allowList.some(path => to.fullPath.startsWith(path))) {
    return next()
  }
  if (token) return next()

  Toast.fail('请先登录')

  const redirect = to.fullPath
  if (router.currentRoute.path !== '/login') {
    next({ path: '/login', query: { redirect } })
  } else {
    next()
  }
})

export default router
