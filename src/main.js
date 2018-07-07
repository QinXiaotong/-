import Vue from 'vue';
import App from './App.vue';
import router from './routes/router.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
