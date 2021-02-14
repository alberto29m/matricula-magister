<template>
  <div class="preguntas">
    <div class="preguntas__navigation navigation">
        <div class="home__title navigation__title">
            <img src="./assets/logo.svg" alt="logo">
            <h2>Magister</h2>
        </div>
        <div class="navigation__timeline">
            <router-link to="/preguntas">¿En qué te quieres especializar?</router-link>
            <router-link to="/preguntas">Horario y Modalidad</router-link>
            <router-link to="/preguntas">Tarifa</router-link>
            <router-link to="/preguntas">Datos personales</router-link>
            <router-link to="/preguntas">Dirección</router-link>
            <router-link to="/preguntas">Forma de pago</router-link>
        </div>
    </div>
  </div>
  
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .preguntas{
    height: 100%;

    &__navigation{
      height: 100%;
      width: 30%;
      background-color: #0A3868;
    }
    .navigation{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10vh;
      &__title{
        display:flex;
      }
      &__timelane{
        display: flex;
        flex-direction: column;
      }
    }
  }
  
  
</style>