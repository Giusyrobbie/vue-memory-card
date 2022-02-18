<template>
  <div id="app">
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

<style>
</style>
