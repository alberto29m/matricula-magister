<template>
    <div class="formulario">
        <preguntas image-url="direccion.svg"></preguntas>
        <div class="formulario__data">
            <h1>Tu dirección</h1> 

            <div class="formulario__row">
                <div class="formulario__select w100">
                    <h4>Comunidad de Exámen</h4>
                    <p>(Selecciona una opción)</p>
                    <select name="comunidades" id="comunidades">
                        <option v-for="comunidad in comunidades"> {{comunidad}} </option>
                    </select>
                </div>
            </div>
        
            <div class="formulario__column">
                <h4>Dirección</h4>
                <input type="text" id="direccion" class="formulario__input" placeholder="Ej: Calle Ramiro de Maxtu, 10, 4D ">
            </div>
            <div class="formulario__row no-padding">
                <div class="formulario__column">
                    <h4>Localidad</h4>
                    <input type="text" id="localidad" class="formulario__input" placeholder="Ej: Madrid">
                </div>
                <div class="formulario__column">
                    <h4>Provincia</h4>
                    <input type="text" id="provinciaDirec" class="formulario__input" placeholder="Ej: Madrid">
                </div>
                <div class="formulario__column"> 
                    <h4>Código Postal</h4>
                    <input type="number" id="cd" class="formulario__input" placeholder="Ej: 28040">
                </div>
            </div>
            <div class="formulario__row">
                <div>
                    <input type="radio" id="information" value="information" required="required">
                    <label for="informacion">Acepto la <a href="#">información legal</a></label>
                </div>
                <div>
                    <input type="radio" id="protection" value="protection" required="required">
                    <label for="protection">Acepto la <a href="#">protección de datos</a></label>
                </div>
                
            </div>
            <nav class="formulario__nav">
                <li @click="addDireccion" class="formulario__nav--next">Siguiente</li>
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
    },
    methods: {
         addDireccion () {
            let storage = JSON.parse(window.localStorage.getItem('matricula'));
            
            const comunidadSelected = document.getElementById('comunidades').value;
            const direccionSelected = document.getElementById('direccion').value;
            const localidadSelected = document.getElementById('localidad').value;
            const provinciaDirecSelected = document.getElementById('provinciaDirec').value;
             const cdSelected = document.getElementById('cd').value;
            if((comunidadSelected!="") && (direccionSelected!="") && (localidadSelected!="") && (provinciaDirecSelected!="") && (cdSelected!="")){
                const direccionData = {
                    comunidad : comunidadSelected,
                    direccion : direccionSelected,
                    localidad : localidadSelected,
                    provinciaDirec: provinciaDirecSelected,
                    codigoPostal: cdSelected
                }
                let newStorage = {
                    ...storage,
                    ...direccionData
                }
                window.localStorage.setItem('matricula', JSON.stringify(newStorage));
                this.$router.push('/preguntas/pago');
            }else{
                alert('Rellena todos los campos para continuar');
            }
            
        }
    }
}
</script>

<style lang="scss">


</style>