import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Preguntas from './Preguntas.vue'
import Especializacion from './components/Especializacion.vue'
import Horario from './components/Horario.vue'
import Tarifa from './components/Tarifa.vue'
import Datos from './components/Datos.vue'
import Direccion from './components/Direccion.vue'
import Pago from './components/Pago.vue' 


Vue.use(VueRouter);

const routes = [
  {path:'/home', component: Home},
  {path:'/', component: Home},
  {path:'/preguntas', component: Preguntas},
  {path:'/preguntas/especializacion', component: Especializacion},
  {path:'/preguntas/horario', component: Horario},
  {path:'/preguntas/tarifa', component: Tarifa},
  {path:'/preguntas/datos', component: Datos},
  {path:'/preguntas/direccion', component: Direccion},
  {path:'/preguntas/pago', component: Pago}
];

Vue.component('home', Home);
Vue.component('preguntas', Preguntas);
Vue.component('especializacion', Especializacion);
Vue.component('horario', Horario);
Vue.component('tarifa', Tarifa);
Vue.component('datos', Datos);
Vue.component('direccion', Direccion);
Vue.component('pago', Pago);



const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
