import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//引入主路由

import Home from './components/Home'
// import Faculty from './components/Faculty'
// import Competition from './components/Competition'
// import Constitution from './components/Constitution'
// import Application from './components/Application'
// import About from './components/About'
// import TripInfo from './components/public/TripInfo'

//引入其他
import ApplyForm from './components/public/applyForm'
import Result from './components/public/Result'

//引入简历
import Enrico from './bio/Enrico'
import Smith from './bio/Smith'
import Cong from './bio/Cong'
import Cristiano from './bio/Cristiano'
import Ferrati from './bio/Ferrati'
import Lorenzo from './bio/Lorenzo'
import Zhaoxiaohong from './bio/Zhaoxiaohong'
import Tamara from './bio/Tamara'
import Asaf from './bio/Asaf'
import Andrea from './bio/Andrea'
import Ingrid from './bio/Ingrid'
import Ivy from './bio/Ivy'
import Mark from './bio/Mark'


export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: "/",
      name: 'home',
      component: Home
      // children: [//二级路由
      //   {
      //     path: "homeA",
      //     component: HomeA,
      //   }
      // ]
    },
    {
      path: "/faculty",
      name: "faculty",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Faculty')
    },
    {
      path: "/competition",
      name: "competition",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Competition')
    },
    {
      path: "/constitution",
      name: "constitution",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Constitution')
    },
    {
      path: "/application",
      name: "application",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Application')
    },
    {
      path: "/tripInfo",
      name: "tripInfo",
      component: () => import(/* webpackChunkName: "group-main" */'./components/TripInfo')
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "group-main" */'./components/About')
    },

    // 其他路由
    {
      path: "/application/applyForm",
      component: ApplyForm
    },
    {
      path: "/competition/result",
      component: Result
    },
    // 简历路由
    {
      path: "/bio/enrico",
      component: Enrico
    },
    {
      path: "/bio/smith",
      component: Smith
    },
    {
      path: "/bio/cong",
      component: Cong
    },
    {
      path: "/bio/cristiano",
      component: Cristiano
    },
    {
      path: "/bio/ferrati",
      component: Ferrati
    },
    {
      path: "/bio/lorenzo",
      component: Lorenzo
    },
    {
      path: "/bio/zhaoxiaohong",
      component: Zhaoxiaohong
    },
    {
      path: "/bio/tamara",
      component: Tamara
    },
    {
      path: "/bio/asaf",
      component: Asaf
    },
    {
      path: "/bio/andrea",
      component: Andrea
    },
    {
      path: "/bio/ingrid",
      component: Ingrid
    },
    {
      path: "/bio/ivy",
      component: Ivy
    },
    {
      path: "/bio/mark",
      component: Mark
    },
    //音乐会路由
    {
      path: "/concerts",
      name: "concerts",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/concerts/Concerts'),
    },
  ]
})
