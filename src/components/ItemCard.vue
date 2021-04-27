<template>
  <div class="item-card">
    <span class="item-name">{{ item.name }}</span>
    <div class="item-wrapper">
      <span class="item-description">{{ item.description }}</span>
      <span class="item-weight">{{ item.weight }} quilo(s)</span>
      <span class="item-class">class: {{ item.class }}</span>
      <span class="item-type">type: {{ item.type }}</span>
    </div>
    <div class="icon-container">
      <img
        class="icon"
        :src="trashIcon"
        @click="$emit('removeAt', itemIndex)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ItemCard } from "../interfaces";

export default defineComponent({
  name: "ItemCard",
  props: {
    item: {
      type: Object as () => ItemCard,
    },
    itemIndex: Number,
  },
  data: function () {
    return {
      trashIcon: require("../assets/trash.svg"),
    };
  },
});
</script>

<style>
.item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  background-color: #fdfdfd;
  border: 1px solid #c9c9c9;
  margin: 0 16px;
  padding: 4px;
  overflow: hidden;
  word-wrap: break-word;
}

.item-card:hover {
  transform: translate(2%, 2%);
  background-color: #fafafa;
}

.item-name {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 8px;
}
.icon-container {
  cursor: pointer;
}
.icon {
  width: 24px;
  height: 24px;
}

.item-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 160px;
}
</style>