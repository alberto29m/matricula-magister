<template>
    <div class="formulario">
        <preguntas image-url="pago.svg"></preguntas>
        <div class="formulario__data">
            <h1>Forma de pago</h1>
            <div class="formulario__column">
                <h4>¿Cómo prefieres abonar tu primer pago?</h4>
                <div class="formulario__buttons">
                    <button class="formulario__button">Tarjeta de crédito/débito(recomendado)</button>
                    <button class="formulario__button">Transferencia bancaria</button>
                </div>
                <a href="#">Detalles sobre forma de pago y proceso post pago &#8594;</a>
            </div>

            <div class="formulario__column">
                <h4>¿Vienes recomendado por alguien?</h4>
                <div class="formulario__buttons">
                    <button class="formulario__button">No</button>
                    <button class="formulario__button">Sí</button>
                </div>
                <a href="https://web.magister.com/">Ver información legal &#8594;</a>
            </div>
            <nav class="formulario__nav">
                <li @click='rellenarMatricula' class="formulario__nav--next" >Enviar</li>
                <router-link tag="li" class="formulario__nav--back" to="/preguntas/direccion">Volver atrás</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Pago',
    components:{
        Preguntas
    },
    data (){
        return {
            
        }
    },
    methods: {
        rellenarMatricula(){
            let storage = JSON.parse(window.localStorage.getItem('matricula'));
            const name = storage.nombre;

            //Día de matriculación
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            
            //Hora de matriculación
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            const dateTime = {
                dia: date,
                hora: time
            } 
            const matriculaCompleta = {
                ...storage,
                ...dateTime
            }
            
            //Envío la matrícula a firestore cuando pulse el botón enviar
            db.collection("matricula").doc(name).set(matriculaCompleta)
            .then(docRef => this.$router.push('/preguntas/gracias'))
            .catch(error => console.log(ERROR))

            //limpio el localStorage
            window.localStorage.clear()
        }
       
    }
}
</script>

<style lang="scss">
.formulario{
    &__column{
        a{
            margin-top: 3vh;
        }
    }
}
</style>