import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Preguntas from './Preguntas.vue'
import Especializacion from './components/Especializacion.vue'
import Horario from './components/Horario.vue'
import Tarifa from './components/Tarifa.vue'
import Datos from './components/Datos.vue'
import Dirección from './components/Direccion.vue'
import Pago from './components/Pago.vue' 

Vue.use(VueRouter);

const routes = [
  {path:'/home', component: Home},
  {path:'/', component: Home},
  {path:'/preguntas', component: Preguntas},
  {path:'/preguntas/especializacion', component: Especializacion}
];

Vue.component('home', Home);
Vue.component('preguntas', Preguntas);
Vue.component('especializacion', Especializacion);



const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
