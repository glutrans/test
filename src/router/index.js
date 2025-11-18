import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '全球昌运集团', icon: 'dashboard' }
    }]
  },

  {
    path: '/usa',
    component: Layout,
    redirect: '/usa/haipai',
    name: 'usa',
    meta: { title: '美国', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/usa/haipai/index'),
        meta: { title: '海运快递派', icon: 'icon-sea' }
      },
      {
        path: 'haika',
        name: 'haika',
        component: () => import('@/views/usa/haika/index'),
        meta: { title: '海运卡车派', icon: 'icon-sea' }
      },
      {
        path: 'kongpai',
        name: 'kongpai',
        component: () => import('@/views/usa/kongpai/index'),
        meta: { title: '空运快递派', icon: 'icon-air' }
      }
    ]
  },

  {
    path: '/euro',
    component: Layout,
    redirect: '/euro/haipai',
    name: 'euro',
    meta: { title: '欧洲', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/euro/haipai/index'),
        meta: { title: '海运快递派', icon: 'icon-sea' }
      },
      {
        path: 'haika',
        name: 'haika',
        component: () => import('@/views/euro/haika/index'),
        meta: { title: '海运卡车派', icon: 'icon-sea' }
      },
      {
        path: 'kongpai',
        name: 'kongpai',
        component: () => import('@/views/euro/kongpai/index'),
        meta: { title: '空运快递派', icon: 'icon-air' }
      }
    ]
  },

  {
    path: '/uk',
    component: Layout,
    redirect: '/uk/haipai',
    name: 'uk',
    // meta: { title: '英国', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/uk/haipai/index'),
        meta: { title: '英国', icon: 'el-icon-s-help' }
      },
      // {
      //   path: 'kongpai',
      //   name: 'kongpai',
      //   component: () => import('@/views/uk/kongpai/index'),
      //   meta: { title: '空派', icon: 'icon-air' }
      // }
    ]
  },

  {
    path: '/zd',
    component: Layout,
    redirect: '/zd/dubai',
    meta: { title: '中东', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'dubai',
        name: 'dubai',
        component: () => import('@/views/zd/dubai/index'),
        meta: { title: '迪拜专线', icon: 'icon-sea' }
      },
      {
        path: 'saudi',
        name: 'saudi',
        component: () => import('@/views/zd/saudi/index'),
        meta: { title: '沙特专线', icon: 'icon-sea' }
      },
    ]
  },

  {
    path: '/au',
    component: Layout,
    redirect: '/au/haipai',
    // meta: { title: '澳洲', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/au/haipai/index'),
        meta: { title: '澳洲', icon: 'el-icon-s-help' }
      },
      // {
      //   path: 'kongpai',
      //   name: 'kongpai',
      //   component: () => import('@/views/au/kongpai/index'),
      //   meta: { title: '空派', icon: 'icon-air' }
      // },
    ]
  },

  {
    path: '/can',
    component: Layout,
    // meta: { title: '加拿大', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/can/haipai/index'),
        meta: { title: '加拿大', icon: 'el-icon-s-help' }
      },
      // {
      //   path: 'kongpai',
      //   name: 'kongpai',
      //   component: () => import('@/views/can/kongpai/index'),
      //   meta: { title: '空派专线', icon: 'table' }
      // },
    ]
  },

  {
    path: '/mco',
    component: Layout,
    redirect: '/mco/haipai',
    meta: { title: '墨西哥', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'haipai',
        name: 'haipai',
        component: () => import('@/views/mco/haipai/index'),
        meta: { title: '海派专线', icon: 'table' }
      },
      {
        path: 'kongpai',
        name: 'kongpai',
        component: () => import('@/views/mco/kongpai/index'),
        meta: { title: '空派专线', icon: 'table' }
      },
    ]
  },

  {
    path: '/dny',
    component: Layout,
    redirect: '/dny/malaysia',
    meta: { title: '东南亚', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'malaysia',
        meta: { title: '马来西亚', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/malaysia/haipai/index'),
            meta: { title: '海派专线', icon: 'table' }
          },
          {
            path: 'kongpai',
            name: 'kongpai',
            component: () => import('@/views/dny/malaysia/kongpai/index'),
            meta: { title: '空派专线', icon: 'table' }
          },
        ]
      },
      {
        path: 'philippines',
        meta: { title: '菲律宾', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/philippines/haipai/index'),
            meta: { title: '海派专线', icon: 'table' }
          },
          {
            path: 'kongpai',
            name: 'kongpai',
            component: () => import('@/views/dny/philippines/kongpai/index'),
            meta: { title: '空派专线', icon: 'table' }
          },
        ]
      },
      {
        path: 'singapore',
        meta: { title: '新加坡', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/singapore/haipai/index'),
            meta: { title: '海派专线', icon: 'table' }
          },
          {
            path: 'kongpai',
            name: 'kongpai',
            component: () => import('@/views/dny/singapore/kongpai/index'),
            meta: { title: '空派专线', icon: 'table' }
          },
        ]
      },
      {
        path: 'thailand',
        meta: { title: '泰国', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/thailand/haipai/index'),
            meta: { title: '泰国专线', icon: 'table' }
          }
        ]
      },
      {
        path: 'vietnam',
        meta: { title: '越南', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/vietnam/haipai/index'),
            meta: { title: '越南专线', icon: 'table' }
          }
        ]
      },
      {
        path: 'indonesia',
        meta: { title: '印度尼西亚', icon: 'tree' },
        component: () => import('@/views/dny/index'),
        children: [
          {
            path: 'haipai',
            name: 'haipai',
            component: () => import('@/views/dny/indonesia/haipai/index'),
            meta: { title: '海派专线', icon: 'table' }
          },
          {
            path: 'kongpai',
            name: 'kongpai',
            component: () => import('@/views/dny/indonesia/kongpai/index'),
            meta: { title: '空派专线', icon: 'table' }
          },
        ]
      }
    ],
  },

  // {
  //   path: '/fcl',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'fcl',
  //       component: () => import('@/views/fcl/index'),
  //       meta: { title: '整柜', icon: 'el-icon-s-help' },
  //     }
  //   ]
  // },

  // {
  //   path: '/lcl',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'lcl',
  //       component: () => import('@/views/lcl/index'),
  //       meta: { title: '拼箱', icon: 'el-icon-s-help' }
  //     },
  //   ]
  // },

  // {
  //   path: '/kd',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'kd',
  //       component: () => import('@/views/kd/index'),
  //       meta: { title: '快递', icon: 'el-icon-s-help' }
  //     },
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
