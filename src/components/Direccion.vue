<template>
    <div class="formulario">
        <preguntas image-url="direccion.svg"></preguntas>
        <div class="formulario__data">
            <h1>Tu dirección</h1> 

            <div class="formulario__row">
                <div class="formulario__select w100">
                    <h4>Rama</h4>
                    <p>(Selecciona una opción)</p>
                    <select name="comunidades" id="comunidades">
                        <option v-for="comunidad in comunidades"> {{comunidad}} </option>
                    </select>
                </div>
            </div>
        
            <div class="formulario__column">
                <h4>Nombre completo</h4>
                <input type="text" class="formulario__input" placeholder="Ej: Camila Pérez Sánchez">
            </div>
            <div class="formulario__row no-padding">
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
            <div class="formulario__row">
                <div>
                    <input type="radio" id="information" value="information">
                    <label for="informacion">Acepto la <a href="#">información legal</a></label>
                </div>
                <div>
                    <input type="radio" id="protection" value="protection">
                    <label for="protection">Acepto la <a href="#">protección de datos</a></label>
                </div>
                
            </div>
            <nav class="formulario__nav">
                <router-link tag="li" class="formulario__nav--next" to="/preguntas/pago">Siguiente</router-link>
                <router-link tag="li" class="formulario__nav--back" to="/preguntas/datos">Volver atrás</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Direccion',
    components:{
        Preguntas
    },
    data (){
        return {
            comunidades: []
        }
    },
    created(){
        db.collection('comunidades').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.comunidades.push(data[num]);
                }
            })
        })
    }
}
</script>

<style lang="scss">


</style>