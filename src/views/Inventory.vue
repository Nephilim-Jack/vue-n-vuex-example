<template>
  <ItemModal v-if="showModal" />
  <button @click="showModal = !showModal" id="plus-btn">
    <img :src="plusIcon" alt="" />
  </button>
  <div id="header-bar">
    <h1>
      Olá {{ this.$store.getters.playerName }} o(a)
      {{ this.$store.getters.playerClass }}, bem vindo(a) ao seu inventário
    </h1>
  </div>
  <ul id="items-list">
    <li v-for="(item, index) in this.$store.state.items" :key="index">
      <ItemCard :itemIndex="index" :item="item" @removeAt="removeItem" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemCard from "../components/ItemCard.vue";
import ItemModal from "../components/ItemModal.vue";
export default defineComponent({
  name: "Inventory",
  components: {
    ItemCard,
    ItemModal,
  },
  methods: {
    removeItem: function (itemIndex: number) {
      this.$store.commit("removeItemAt", itemIndex);
    },
  },
  data: function () {
    return {
      plusIcon: require("../assets/plus.svg"),
      showModal: false,
    };
  },
});
</script>

<style>
#items-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}
#plus-btn {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #06d6a0;
  color: white;
  width: 64px;
  height: 64px;
  padding: 8px;
  border-radius: 50%;
  right: 32px;
  bottom: 32px;
  border: none;
  cursor: pointer;
}
#plus-btn:hover {
  background-color: #049f76;
}
#plus-btn img {
  filter: brightness(0) invert(1);
  width: 40px;
  height: 40px;
}

#header-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}
</style>