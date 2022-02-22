<template>
  <div class="CardContainer" :class="disabledClass()">
    <div class="CardContainer__text">Matches found: {{matchesFound}}</div>
    <div class="CardContainer__text" v-if="matchesFound == 8">Congratulation!!!!</div>

    <div class="CardContainer__wrapper">
      <div v-for="(card, index) in cardList" :key="index" >
        <CardComponent
            :name="card.name"
            :id="card.code"
            :visible="card.visible"
            :matched="card.matched"
            @click-card="handlerEvent($event)"
        />
      </div>
    </div>
    <button class="CardContainer__button" @click="restartGame">Restart Game!</button>

  </div>
</template>

<script lang='ts'>
import {Component, Vue} from "vue-property-decorator";
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
  public cardsSelected = [];
  public matchesFound: number = 0;
  public disabledCards: boolean = false;



  handlerEvent(id) {
    let card = this.cardsList.find((item) => item.code == id);
    card.visible = !card.visible;
    if(card.visible){
      this.cardsSelected.push(card);
      if(this.cardsSelected.length == 2) {
        this.disabledCards = true
        setTimeout(() => {
          this.disabledCards = false
          this.matchCards();
        }, 800);
      }
    } else this.cardsSelected = [];
  }

  disabledClass() {
    return {['CardContainer__disabled']: this.disabledCards}
  }


  restartGame() {
    this.cardsSelected = [];
    this.matchesFound = 0;
    Vue.set(this.cardsList, 'cards', this.cardsList.forEach((item) => {
      item.visible = false
      item.matched = false
    }))
  }

  get cardList() {
    this.cardsList = [...cards];
    return _.shuffle(this.cardsList);
  }

  matchCards() {
    const [selectedCard1, selectedCard2] = this.cardsSelected;
      if (selectedCard1.name == selectedCard2.name) {
        this.cardsList[selectedCard1.code].matched = true;
        this.cardsList[selectedCard2.code].matched = true;
        this.matchesFound++;
        this.cardsSelected = [];

      } else {
        setTimeout(() => {
          this.cardsList[selectedCard1.code].visible = false;
          this.cardsList[selectedCard2.code].visible = false;
        }, 300);
        this.cardsSelected = [];
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$gutter: 15px;

.CardContainer {

  &__button {
    background-color: #4CAF50;
    border-radius: 7px;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    margin: $gutter;
  }

  &__text {
    font-family: Arial, Helvetica, sans-serif;
    padding-top: $gutter;
    font-size: 20px;
    color: white;
  }

  &__wrapper {
    padding: $gutter * 2 0;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4,auto);
    grid-column-gap: $gutter;
    grid-row-gap: $gutter;
    justify-content: center;
  }

  &__disabled {
    pointer-events: none;
  }
}
</style>
