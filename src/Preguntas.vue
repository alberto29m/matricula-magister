<template>
  <div class="preguntas">
    <div class="preguntas__navigation navigation">
        <div class="navigation__title">
            <img src="./assets/logo.svg" alt="logo">
            <h2>Magister</h2>
        </div>
        <nav class="navigation__timeline">
            <router-link tag="li" class-active="active" to="/preguntas/especializacion">¿En qué te quieres especializar?</router-link>
            <router-link tag="li" class-active="active" to="/preguntas/horario">Horario y Modalidad</router-link>
            <router-link tag="li" class-active="active" to="/preguntas/tarifa">Tarifa</router-link>
            <router-link tag="li" class-active="active" to="/preguntas/datos">Datos personales</router-link>
            <router-link tag="li" class-active="active" to="/preguntas/direccion">Dirección</router-link>
            <router-link tag="li" class-active="active" to="/preguntas/pago">Forma de pago</router-link>
        </nav>
        <div class="navigation__image">
            <img :src="require(`./assets/${imageUrl}`)"/>
        </div>

    </div>
  </div>
  
</template>

<script>
  export default {
    name:'Preguntas',
    props: {
      imageUrl: String
    }
  }
</script>

<style lang="scss">
  .preguntas{
    height: 100%;

    &__navigation{
      height: 90vh;
      width: 30%;
      background-color: #0A3868;
    }
    .navigation{
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10vh;
      position: relative;
      
      &__title{
        display:flex;
        align-items: flex-end;
        margin-bottom: 5vh;
        font-size: 23px;
        font-weight: bold;

        h2{
          margin: 0;
        }

        img{
          width: 80px;
          height: 80px;
          margin-right: 2rem;
        }
       
      }
      &__timeline{
        width: 75%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        margin-left:25%;

        &:after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background-color: #577294;
        }

        li{
          color: #577294;
          font-weight: 700;
          padding-left: 2rem;
          position: relative;
          list-style: none;
          cursor: pointer;

          &:before{
            content: '';
            position: absolute;
            top: -5px;
            left: 0;
            transform: translate(-45%);
            width: 2rem;
            height: 2rem;
            background-color: #577294;
            border-radius: 50%;
            z-index: 4;
          }

          &:hover{
            color:white;
          }
          &.router-link-exact-active{
            color:white;

            &:before{
              width: calc(2rem - 4px);
              height: calc(2rem - 4px);
              border: 4px solid white;
              background-color: #0A3868;
            }
          }
        }
      }

      &__image{
        width: 100%;
        height: 35vh;
        position:absolute;
        bottom: 0;
        
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  
  
</style>