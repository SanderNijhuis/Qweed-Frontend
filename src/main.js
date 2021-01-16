import Vue from 'vue'
import App from './App.vue'

import router from './routes';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import VueNumericInput from 'vue-numeric-input';

Vue.use(VueNumericInput)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const moment = require('moment')
moment.locale('nl')

Vue.use(require('vue-moment'), {
  moment
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
