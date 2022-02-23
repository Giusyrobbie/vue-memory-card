<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <CardsContainer></CardsContainer>

  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import CardsContainer from "./components/CardsContainer.vue";

@Component({
  components: {
    CardsContainer,
  },
})
export default class App extends Vue {}
</script>



<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #045b5b;
}
</style>
<style scoped lang="scss">

#app {
  text-align: center;
  img {
    padding-top: 20px;
    width: 300px;
  }
}
</style>
