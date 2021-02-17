<template>
    <div class="home">
        <div class="home__title">
            <img src="../assets/logo.svg" alt="logo">
            <h2>Magister</h2>
        </div>
        <h1>¡Gracias!</h1>
        <h1>Tu reserva está en proceso</h1>
        <p>La matrícula sólo será efectiva una vez se haya recibido el Pago por Tartjeta o Transferencia</p>
        <div class="home__buttons">
            <router-link to="/home"><button class="home__buttons--start">Volver a home</button> </router-link>
            <router-link to="/home"><button class="home__buttons--go-back">Volver atrás</button></router-link>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Gracias',
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    .home{
        width: 100%;
        height: 100%;
        background-color: #0A3868;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 3rem;

            &:nth-last-of-type(1){
                margin-top: 0;
            }
        }
        p{
            width: 40%;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 12vh;
        }

        &__title{
            display: flex;
            font-size: 25px;

            img{
                width: 80px;
                height: 80px;
                margin-right: 2rem;
            }
        }
        &__buttons{
            display: flex;
            flex-direction: column;

            button{
                border-radius: 10px;
                font-weight: 700;
                padding: 0.5rem 3rem;
                border: none;
                cursor: pointer;
            }

            &--start{
                background-color: #0BC6FE;
                color:white;
                margin-bottom: 1vh;
            }
            &--go-back{
                background-color: transparent;
                color: #0BC6FE;
            }
        }
    }
    
</style>