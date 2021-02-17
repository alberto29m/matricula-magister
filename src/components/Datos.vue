<template>
    <div class="formulario">
        <preguntas image-url="datos.svg"></preguntas>
        <div class="formulario__data">
            <h1>Tus datos personales</h1>
        
            <div class="formulario__column">
                <h4>Nombre completo</h4>
                <input type="text" class="formulario__input" placeholder="Ej: Camila Pérez Sánchez">
            </div>
            <div class="formulario__row">
                <div class="formulario__column">
                    <h4>DNI - NIE</h4>
                    <input type="number" class="formulario__input" placeholder="Ej: Y56748659P">
                </div>
                <div class="formulario__column">
                    <h4>Móvil</h4>
                    <input type="text" class="formulario__input" placeholder="Ej: 654789735">
                </div>
                <div class="formulario__column"> 
                    <h4>Email</h4>
                    <input type="text" class="formulario__input" placeholder="Ej: camila.per.san@gmail.com">
                </div>
            </div>
            <nav class="formulario__nav">
                <router-link tag="li" class="formulario__nav--next" to="/preguntas/direccion">Siguiente</router-link>
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
            tarifas: [],
        }
    }
}
</script>

<style lang="scss">


</style>