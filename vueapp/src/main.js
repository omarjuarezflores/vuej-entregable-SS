import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Axios from 'axios';
import router from "@/router";

Vue.use(BootstrapVue)
Vue.prototype.$http = Axios;

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
