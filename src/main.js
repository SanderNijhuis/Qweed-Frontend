import Vue from 'vue'
import App from './App.vue'

import router from './routes';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

//import md5 from 'js-md5'

import LocalStorageService from "./services/LocalStorageService";
import VueNumeric from 'vue-numeric'

Vue.use(VueNumeric)


//Vue.use(md5)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const moment = require('moment')
moment.locale('nl')

Vue.use(require('vue-moment'), {
  moment
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!LocalStorageService.getUser()) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
