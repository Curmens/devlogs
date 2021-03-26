import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import "font-awesome/css/font-awesome.min.css"
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
