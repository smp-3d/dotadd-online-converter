import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here

import { Converter, ConverterOptions } from 'dotadd.toolset'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Converter.convert_string([], new ConverterOptions());

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('kb', val => {
  return Math.floor(val / 1024);
});