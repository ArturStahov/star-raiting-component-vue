import Vue from 'vue'
import App from './App.vue'
import '@csstools/normalize.css';
import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
