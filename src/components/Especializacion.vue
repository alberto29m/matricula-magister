<template>
    <div class="formulario">
        <preguntas image-url="especializacion.svg"></preguntas>
        <div class="formulario__data">
            <h1>¿En qué te quieres especializar?</h1>
            <div class="formulario__row">
                <div class="formulario__select">
                    <h4>Rama</h4>
                    <p>(Selecciona una opción)</p>
                    <select name="rama" id="rama">
                        <option v-for="rama in ramas"> {{rama}} </option>
                    </select>
                </div>
                <div class="formulario__select">
                    <h4>Provincia</h4>
                    <p>(Selecciona una opción)</p>
                    <select name="provincia" id="provincia">
                        <option v-for="provincia in provincias"> {{provincia}}</option>
                    </select>
                </div>
            </div>
            <div class="formulario__column">
                <h4>¿Has sido alumn@ de Magister?</h4>
                <a href="https://web.magister.com/">Consulta Condiciones &#8594;</a>
                <div class="formulario__buttons">
                    <button class="formulario__button">No</button>
                    <button class="formulario__button">Sí</button>
                    <button class="formulario__button">Sí, después de 2017</button>
                </div>
            </div>
            <div class="formulario__column">
                <h4>Entrega de material</h4>
                <a href="https://web.magister.com/">Consulta Condiciones &#8594;</a>
                 <div class="formulario__buttons">
                     <button class="formulario__button">Material mes a mes</button>
                 </div>
            </div>
            <nav class="formulario__nav">
                <router-link tag="li" class="formulario__nav--next" to="/preguntas/horario">Siguiente</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Especializacion',
    components:{
        Preguntas
    },
    data (){
        return {
            ramas: [],
            provincias:[]
        }
    },
    created(){
        db.collection('ramas').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.ramas.push(data[num]);
                }
            })
        })
        db.collection('provincias').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.provincias.push(data[num]);
                }
            })
        })
    }
}
</script>

<style lang="scss">
    
</style>