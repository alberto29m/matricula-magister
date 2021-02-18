<template>
    <div class="formulario">
        <preguntas image-url="horario.svg"></preguntas>
        <div class="formulario__data">
            <h1>¿En qué te quieres especializar?</h1>
            <div class="formulario__row">
                <div class="formulario__select w100">
                    <h4>Modalidad</h4>
                    <p>(Selecciona una opción)</p>
                    <ul class="formulario__options">
                        <li class="formulario__button" v-for="modalidad in modalidades">
                            {{modalidad}}
                        </li>  
                    </ul>
                </div>
                
            </div>

            <div class="formulario__column">
                <h4>Horario</h4>
                <p>(Selecciona una opción)</p>
                 <ul class="formulario__options">
                        <li class="formulario__button w100" v-for="horario in horarios">
                            {{horario}}
                        </li>  
                    </ul>
            </div>
            <nav class="formulario__nav">
                <router-link tag="li" class="formulario__nav--next" to="/preguntas/tarifa">Siguiente</router-link>
                <router-link tag="li" class="formulario__nav--back" to="/preguntas/especializacion">Volver atrás</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Horario',
    components:{
        Preguntas
    },
    data (){
        return {
            modalidades: [],
            horarios:[]
        }
    },
    created(){
        db.collection('modalidades').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.modalidades.push(data[num]);
                }
            })
        })
        db.collection('horarios').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.horarios.push(data[num]);
                }
            })
        })
    }
}
</script>

<style lang="scss">
.formulario{
    &__options{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding:0;

        li{
            list-style: none;
            width: 40%;
            margin-right:5%;
            margin-bottom: 2vh;

            &.w100{
                width: auto;
            }
        }
    }
}
</style>