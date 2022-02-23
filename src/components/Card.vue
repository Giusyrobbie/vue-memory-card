<template>
  <div class="Card" @click="flipCard(id)" :class="isMatchedClass">
    <div class="Card__content">
      <div  class="Card__front" v-if="visible">
        <img
            ref="cardSelected"
            class="Card__image"
            :src="url"
            :alt="name"
        />
      </div>
      <div class="Card__back" v-else>
        <img  src="../assets/pokeball.png">
      </div>
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
  @Prop({ type: String, required: true }) url: string;

  get isMatchedClass() {
    return {
      ["Card--matched"]: this.matched,
      ["Card--isFlipped"]: this.visible,
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
  position: relative;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #165b8b;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  }

  &--isFlipped {
    transform: rotateY( 180deg ) ;
    transition: transform 0.5s;
  }

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

  &__front {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;

  }

  &__back {
    text-align: center;
    backface-visibility: hidden;
    img {
      height: 50px;
      width: 50px;
    }
  }
}





</style>
