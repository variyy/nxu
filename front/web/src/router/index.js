import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载
const home = () => import('../views/home.vue')
const login = () => import('../views/login.vue')
const register = () => import('../views/register.vue')
const logout = () => import('../views/logout.vue')
const webwithcdn = () => import('../views/webwithcdn.vue')
const webwithoutcdn = () => import('../views/webwithoutcdn.vue')
const webvideo = () => import('../views/webvideo.vue')
const webmessage = () => import('../views/webmessage.vue')
const batchtest = () => import('../views/batchtest.vue')
const personalcenter = () => import('../views/personalcenter.vue')
const userinfo = () => import('../views/userinfo.vue')
const logaudit = () => import('../views/logaudit.vue')

const routes = [
  {
    path: '',
    // 重定向
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/webwithoutcdn',
    component: home,
    children: [
      {
        path: '/webwithcdn',
        name: 'webwithcdn',
        component: webwithcdn
      }, {
        path: '/webwithoutcdn',
        name: 'webwithoutcdn',
        component: webwithoutcdn
      }, {
        path: '/webvideo',
        name: 'webvideo',
        component: webvideo
      }, {
        path: '/webmessage',
        name: 'webmessage',
        component: webmessage
      }, {
        path: '/batchtest',
        name: 'batchtest',
        component: batchtest
      }, {
        path: '/personalcenter',
        name: 'personalcenter',
        component: personalcenter
      }, {
        path: '/userinfo',
        name: 'userinfo',
        component: userinfo
      }, {
        path: '/logaudit',
        name: 'logaudit',
        component: logaudit
      }, {
        path: '/logout',
        name: 'logout',
        component: logout
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 使用push的方法
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}

// 使用replace的方法
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}

export default router//导出路由对象
