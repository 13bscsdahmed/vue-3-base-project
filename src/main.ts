import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { AuthService } from './modules/shared/services';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    AuthService.initUserSession();
  }
}).$mount('#app');
