<template>
  <div class="CardContainer">
    <div v-for="(card, index) in cardList" :key="index">
      <CardComponent
          :name="card.name"
          :id="card.code"
          :visible="card.visible"
          :matched="card.matched"
          @click-card="handlerEvent($event)"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import _ from "lodash";
import CardComponent from "./Card.vue";
import {Card} from "../models/card.model";
import {cards} from "../cards";

@Component({
  components: {
    CardComponent,
  },
})
export default class CardContainer extends Vue {
  public cardsList: Card[] = null;
  public currentCards = [];

  created() {}



  handlerEvent(id) {
    let card = cards.find((item) => item.code == id);
    card.visible = true;
    this.matchCards(card);
  }

  get cardList() {
    this.cardsList = [...cards];
    return _.shuffle(this.cardsList);
  }

  matchCards(card: Card) {
    this.currentCards.push(card);
    if (this.currentCards.length == 2) {
      let selectedCard1: Card = this.currentCards[0];
      let selectedCard2: Card = this.currentCards[1];
      console.log("-----", selectedCard1, selectedCard2);

      if (selectedCard1.name == selectedCard2.name) {
        this.cardsList[selectedCard1.code].matched = true;
        this.cardsList[selectedCard2.code].matched = true;
      } else {
        setTimeout(() => {
          console.log("dentro else");
          console.log("cards", selectedCard2);
          this.cardsList[selectedCard1.code].visible = false;
          this.cardsList[selectedCard2.code].visible = false;
        }, 1000);

        this.currentCards = [];
      }
    } else return;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CardContainer {
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
