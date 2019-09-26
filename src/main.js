import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' 
import { Logger } from 'dotadd.tools/build/Logger'

import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Logger.prototype.verbose = true;

Vue.use(VueMaterial);
Vue.use(Toasted);

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('kb', val => {
  return Math.floor(val / 1024);
});