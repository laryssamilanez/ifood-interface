import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/layout.css'
import '@/assets/styles/colors.css'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')