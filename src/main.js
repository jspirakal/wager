import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';
import { ValidationProvider } from 'vee-validate';
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Sweet Alert
Vue.use(VueSweetalert2);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if(store.getters.loggedIn) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }else {
    next()
  }
})

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
