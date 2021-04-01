// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias
// Created By HamiXR.
import Vue from 'vue'
import VueResource from 'vue-resource'
import '../static/reset.css'
// 引入多语言支持
import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueI18n);
Vue.use(VeeValidate);

Vue.prototype.globalData = 1;

const i18n = new VueI18n({
  locale: 'en',
  // this.$i18n.locale //通过切换locale的值来实现语言切换
  messages: {
    'en': require('./language/en.json'),
    'zh': require('./language/zh.json')
  }
});

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
