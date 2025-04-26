import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _082f84a1 = () => interopDefault(import('..\\pages\\banner_list.vue' /* webpackChunkName: "pages/banner_list" */))
const _6cc90382 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _35ff9de4 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2532b23a = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _2e89c322 = () => interopDefault(import('..\\pages\\subadmin.vue' /* webpackChunkName: "pages/subadmin" */))
const _76c6adbc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/banner_list",
    component: _082f84a1,
    name: "banner_list"
  }, {
    path: "/blog",
    component: _6cc90382,
    name: "blog"
  }, {
    path: "/dashboard",
    component: _35ff9de4,
    name: "dashboard"
  }, {
    path: "/product",
    component: _2532b23a,
    name: "product"
  }, {
    path: "/subadmin",
    component: _2e89c322,
    name: "subadmin"
  }, {
    path: "/",
    component: _76c6adbc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
