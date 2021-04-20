import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a529495 = () => interopDefault(import('../pages/archive.vue' /* webpackChunkName: "pages/archive" */))
const _d0689e42 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _274d2a46 = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/post" */))
const _0c20b136 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archive",
    component: _6a529495,
    name: "archive"
  }, {
    path: "/blog",
    component: _d0689e42,
    name: "blog"
  }, {
    path: "/post",
    component: _274d2a46,
    name: "post"
  }, {
    path: "/",
    component: _0c20b136,
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
