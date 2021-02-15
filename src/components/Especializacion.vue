<template>
    <div class="especializacion">
        <preguntas image-url="especializacion.svg"></preguntas>
        <div class="especializacion__data">

        </div>
    </div>

</template>

<script>
import Preguntas from '../Preguntas.vue'

export default { 
    name: 'Especializacion',
    components:{
        Preguntas
    }
}
</script>

<style lang="scss">
    .especializacion{
        width: 100%;
        height: 100%;
    }
</style>