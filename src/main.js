import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import modal from './plugins/Modal';
import edit from './plugins/Edit';
import vuetify from './plugins/vuetify';




Vue.config.productionTip = false;

Vue.use(modal);
Vue.use(edit);


new Vue({
  render: h => h(App),
  store,
  router,
  modal,
  edit,
  vuetify
}).$mount('#app');