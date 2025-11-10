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
      },
      {
        path: '/search',
        component: () => import('@/views/search.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/settings.vue')
      },
      {
        path: 'other',
        component: () => import('@/views/test.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/about.vue')
      },
      {
        path: 'feedback',
        component: () => import('@/views/Feedback.vue')
      }
    ]
  },
  {
    path: '/settings/edit',
    component: () => import('@/views/settingss/EditProfile.vue')
  },
  {
    path: '/settings/pwd',
    component: () => import('@/views/settingss/ChangePwd.vue')
  },
  {
    path: '/settings/email',
    component: () => import('@/views/settingss/BindEmail.vue')
  },
  {
    path: '/settings/mobile',
    component: () => import('@/views/settingss/BindMobile.vue')
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

const allowList = ['/login', '/register']
router.beforeEach(async (to, from, next) => {
  const token = window.localStorage.getItem('token')
  const isAllowPath = allowList.some(path => to.fullPath.startsWith(path))
  if (isAllowPath) {
    if (token) {
      Toast.fail('请勿重复登录')
      next({ path: '/' })
      window.history.forward(1)
    } else {
      next()
    }
  } else {
    if (token) {
      next()
    } else {
      Toast.fail('请先登录')
      const redirect = encodeURIComponent(to.fullPath)
      next({ path: '/login', query: { redirect } })
    }
  }
})

window.addEventListener('popstate', () => {
  const token = window.localStorage.getItem('token')
  const isAllowPath = allowList.some(path => window.location.pathname.startsWith(path))
  if (isAllowPath && token) {
    window.location.href = '/'
  }
})
export default router
