<template>
    <div class="formulario">
        <preguntas image-url="horario.svg"></preguntas>
        <div class="formulario__data">
            <h1>Selecciona tu tarifa</h1>
        
            <div class="formulario__column">
                <h4>Tarifas</h4>
                <p>(Selecciona una opción)</p>
                 <ul class="formulario__options">
                        <li class="formulario__button w100" v-for="tarifa in tarifas">
                            {{tarifa}}
                        </li>  
                    </ul>
            </div>
            <nav class="formulario__nav">
                <router-link tag="li" class="formulario__nav--next" to="/preguntas/datos">Siguiente</router-link>
                <router-link tag="li" class="formulario__nav--back" to="/preguntas/horario">Volver atrás</router-link>
            </nav>
            
        </div> 
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'
import db from '../firebaseInit'

export default { 
    name: 'Tarifas',
    components:{
        Preguntas
    },
    data (){
        return {
            tarifas: [],
        }
    },
    created(){
        db.collection('tarifas').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                for(const num in data){
                    this.tarifas.push(data[num]);
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