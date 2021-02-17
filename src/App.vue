<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  font-family: Quicksand;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  text-align: center;
  color: white;
}


.formulario {
  width: 100%;
  height: 100%;
  display: flex;

  &__data {
    width: calc(100% - 500px);
    height: 100%;
    color: #577294;
    padding: 0 5rem;
    position: relative;

    h1 {
      font-size: 35px;
      font-weight: bold;
      margin-top: 15vh;
    }

    h4 {
      font-weight: bold;
      text-align: start;
      margin: 0;
    }

    p {
      margin-top: 0;
      text-align: start;
    }

    a {
      text-align: start;
      text-decoration: none;
      color: #0bc6fe;
      font-weight: 700;
    }

    select {
      width: 100%;
      border: 1px solid #577294;
      border-radius: 10px;
      padding: 0.75rem 1rem;
      font-size: 15px;
      font-family: Quicksand;
      color: darkgrey;
      cursor: pointer;
    }

    
  }
  &__button{
    position: relative;
    min-width: 128px;
    width: auto;
    border: 1px solid #0a3868;
    box-sizing: border-box;
    border-radius: 10px;
    color: #0a3868;
    padding: 0.75rem 1rem;
    background: white;
    margin-right: 1.5rem;
    cursor: pointer;
    
   
  }

  &__row {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
  }
  &__column {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
  }

  &__select {
    width: 40%;
  }

  &__buttons {
    display: flex;
    justify-content: start;
    margin-top: 1.5rem;
  }

  &__nav{
    width: auto;
    position: absolute;
    bottom: 5vh;
    right: 50%;
    transform: translate(50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    li{
      list-style:none;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: bold;
      padding: 0.5rem 3rem;
      cursor: pointer;
    }
    
    &--next{
      background-color: #0BC6FE;
      color:white;
    }
    &--back{
      color: #0BC6FE;
    }
  }
}


</style>
