<template>
  <div class="Card" @click="flipCard(id)">
    <div class="Card__front" v-if="visible">
      <span>{{ name }}</span>
      <span>{{ id }}</span>
    </div>
    <div class="Card_back" else>Top</div>
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

  getClassMap() {
    return {
      ["Card__imgTop"]: this.visible,
      ["Card__imgBottom"]: !this.visible,
    };
  }

  public flipCard(value) {
    this.$emit("click-card", value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.Card {
  border-style: solid;
  width: 70px;
  height: 90px;
}

.Card__imgTop {
  img: "";
}

div:active {
  background-color: yellow;
}
</style>
