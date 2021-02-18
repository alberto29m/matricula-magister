<template>
    <div class="formulario">
        <preguntas image-url="datos.svg"></preguntas>
        <div class="formulario__data">
            <h1>Tus datos personales</h1>
        
            <div class="formulario__column">
                <h4>Nombre completo</h4>
                <input type="text" id="nombre" class="formulario__input" placeholder="Ej: Camila Pérez Sánchez">
            </div>
            <div class="formulario__row">
                <div class="formulario__column">
                    <h4>DNI - NIE</h4>
                    <input type="number" id="dni" class="formulario__input" placeholder="Ej: Y56748659P">
                </div>
                <div class="formulario__column">
                    <h4>Móvil</h4>
                    <input type="text" id="movil" class="formulario__input" placeholder="Ej: 654789735">
                </div>
                <div class="formulario__column"> 
                    <h4>Email</h4>
                    <input type="text" id="email" class="formulario__input" placeholder="Ej: camila.per.san@gmail.com">
                </div>
            </div>
            <nav class="formulario__nav">
                <li @click="addDatos" class="formulario__nav--next">Siguiente</li>
                <router-link tag="li" class="formulario__nav--back" to="/preguntas/tarifa">Volver atrás</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Datos',
    components:{
        Preguntas
    },
    data (){
        return {
            
        }
    },
    methods: {
         addDatos () {
            let storage = JSON.parse(window.localStorage.getItem('matricula'));
            const nombreSelected = document.getElementById('nombre').value;
            const dniSelected = document.getElementById('dni').value;
            const movilSelected = document.getElementById('movil').value;
            const emailSelected = document.getElementById('email').value;
            if((nombreSelected!="") && (dniSelected!="") && (movilSelected!="") && (emailSelected!="")){
                const datosData = {
                    nombre : nombreSelected,
                    dni : dniSelected,
                    movil : movilSelected,
                    email: emailSelected
                }
                let newStorage = {
                    ...storage,
                    ...datosData
                }
                window.localStorage.setItem('matricula', JSON.stringify(newStorage));
                this.$router.push('/preguntas/direccion');
            }else{
                alert('Rellena todos los campos para continuar');
            }
            
        }
    }
}
</script>

<style lang="scss">


</style>