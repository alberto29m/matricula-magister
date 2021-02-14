import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Preguntas from './Preguntas.vue'

Vue.use(VueRouter);

const routes = [
  {path:'/home', component: Home},
  {path:'/', component: Home},
  {path:'/preguntas', component: Preguntas}

];

Vue.component('home', Home);
Vue.component('preguntas', Preguntas);



const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
