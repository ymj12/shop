import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(VueLazyLoad, {
    preLoad: 1,
    loading: require('assets/img/common/ymj.png')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')