<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <CardContainer></CardContainer>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import CardContainer from "./components/CardContainer.vue";

@Component({
  components: {
    CardContainer,
  },
})
export default class App extends Vue {}
</script>


<style scoped lang="scss">

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  text-align: center;
  background-color: #045b5b;



  img {
    padding-top: 20px;
    width: 300px;
  }
}
</style>
