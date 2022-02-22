<template>
  <div class="Card" @click="flipCard(id)" :class="isMatchedClass">
    <div  class="Card__front" v-if="visible">
      <img
          ref="cardSelected"
          class="Card__image"
          :src="require(`../assets/${name}.png`)"
          :alt="name"
      />
    </div>

    <div class="Card__back" v-else>
      <img  src="../assets/pokeball.png">
    </div>

  </div>

</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ type: String, required: true, default: "" }) name: string;
  @Prop({ type: Boolean, required: true, default: false }) visible: boolean;
  @Prop({ type: Number, required: true }) id: number;
  @Prop({ type: Boolean, required: true, default: false }) matched: boolean;

  get isMatchedClass() {
    return {
      ["Card--matched"]: this.matched,
    };
  }

  public flipCard(id: number) {
    this.$emit("click-card", id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Card {
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #165b8b;
  cursor: pointer;

  &.Card--matched {
    opacity: 0.3;
    pointer-events: none;
    cursor: none;
    transition-duration: 0.5s;
  }

  &__image {
    width: 80px;
    height: 80px;
  }

  &__back {
    img {
      height: 50px;
    }
  }
}






</style>
