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
import Ivy from './bio/Ivy'
import Mark from './bio/Mark'

//2020新增
import Alla from './bio/2020/Alla'
import Jack from './bio/2020/Jack'
import Boris from './bio/2020/Boris'
import Blaha from './bio/2020/Blaha'
import Jianing from './bio/2020/Jianing'
import Vladimir from './bio/2020/Vladimir'
import Iannone from './bio/2020/Iannone'

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
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
    //2019
    {
      path: "/faculty/2019",
      name: "faculty2019",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2019/Faculty')
    },
    {
      path: "/faculty/2020",
      name: "faculty2020",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2020/Faculty')
    },
    {
      path: "/competition",
      name: "competition",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Competition')
    },
    {
      path: "/competition/2019",
      name: "competition2019",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2019/Competition')
    },
    {
      path: "/competition/2020",
      name: "competition2020",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2020/Competition')
    },
    //各大赛区
    {
      path: "/division/usa",
      name: "divisionUsa",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/usa/divisionUsa.vue')
    },
    {
      path: "/division/usa/apply",
      name: "applyUsa",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/usa/applyUsa.vue')
    },
    {
      path: "/division/usa/finalists",
      name: "applyUsaFinalists",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/usa/finalists.vue')
    },
    {
      path: "/division/usa/additional",
      name: "applyUsaAdditional",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/usa/additional.vue')
    },
    {
      path: "/division/china",
      name: "divisionChina",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/china/divisionChina.vue')
    },
    {
      path: "/division/china/apply",
      name: "applyChina",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/china/applyChina.vue')
    },
    {
      path: "/division/china/finalists",
      name: "chinaFinalists",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/china/finalists.vue')
    },
    {
      path: "/division/australia",
      name: "divisionAustralia",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/australia/divisionAustralia.vue')
    },
    {
      path: "/division/australia/finalists",
      name: "applyAustraliaFinalists",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/australia/finalists.vue')
    },
    {
      path: "/division/online",
      name: "divisionOnline",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/online/divisionOnline.vue')
    },
    {
      path: "/division/online/apply",
      name: "applyOnline",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/online/applyOnline.vue')
    },
    {
      path: "/division/online/finalists",
      name: "applyOnlineFinalists",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/online/finalists.vue')
    },
    {
      path: "/division/canada",
      name: "divisionCanada",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/canada/divisionCanada.vue')
    },
    {
      path: "/division/canada/apply",
      name: "applyCanada",
      component: () => import(/* webpackChunkName: "group-main" */'./components/division2020/canada/applyCanada.vue')
    },
    {
      path: "/constitution",
      name: "constitution",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Constitution')
    },
    {
      path: "/constitution/2019",
      name: "constitution2019",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2019/Constitution')
    },
    {
      path: "/constitution/2020",
      name: "constitution2020",
      component: () => import(/* webpackChunkName: "group-main" */'./components/2020/Constitution')
    },
    {
      path: "/application",
      name: "application",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Application')
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import(/* webpackChunkName: "group-main" */'./components/Gallery')
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
      path: "/bio/ivy",
      component: Ivy
    },
    {
      path: "/bio/mark",
      component: Mark
    },
    //2020新增简历
    {
      path: "/bio/jack",
      component: Jack
    },
    {
      path: "/bio/boris",
      component: Boris
    },
    {
      path: "/bio/alla",
      component: Alla
    },
    {
      path: "/bio/blaha",
      component: Blaha
    },
    {
      path: "/bio/jianing",
      component: Jianing
    },
    {
      path: "/bio/vladimir",
      component: Vladimir
    },
    {
      path: "/bio/iannone",
      component: Iannone
    },
    //音乐会路由
    {
      path: "/concerts",
      name: "concerts",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/concerts/Concerts')
    },
    //比赛名单2020
    {
      path: "/resultGuide",
      name: "resultGuide",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/resultGuide.vue')
    },
    {
      path: "/youngArtistGroup",
      name: "youngArtistGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/youngArtistGroup.vue')
    },
    {
      path: "/professionalAdultGroup",
      name: "professionalAdultGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/professionalAdultGroup.vue')
    },
    {
      path: "/pianoTeachersGroup",
      name: "pianoTeachersGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/pianoTeachersGroup.vue')
    },
    {
      path: "/childrenGroup",
      name: "childrenGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/childrenGroup.vue')
    },
    {
      path: "/amateurJuvenileGroup",
      name: "amateurJuvenileGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/amateurJuvenileGroup.vue')
    },
    {
      path: "/amateurAdultGroup",
      name: "amateurAdultGroup",
      component: () => import(/* webpackChunkName: "group-concerts" */'./components/result/amateurAdultGroup.vue')
    }
  ]
})
