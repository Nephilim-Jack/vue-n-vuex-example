<template>
  <button id="plus-btn">
    <img :src="plusIcon" alt="" />
  </button>
  <h1>Olá usuário, bem vindo ao seu inventário</h1>
  <ul id="items-list">
    <li v-for="(item, index) in items" :key="index">
      <ItemCard :itemIndex="index" :item="item" @removeAt="removeItem" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemCard from "../components/ItemCard.vue";
export default defineComponent({
  name: "Inventory",
  components: {
    ItemCard,
  },
  methods: {
    removeItem: function (itemIndex: number) {
      this.items.splice(itemIndex, 1);
    },
  },
  data: function () {
    return {
      items: [
        {
          name: "Espada",
          description: "Uma espada simples",
          weight: 2,
          class: "Guerreiro",
          type: "uma mão",
        },
        {
          name: "Cajado",
          description: "Uma cajado mágico",
          weight: 1,
          class: "Mago",
          type: "duas mãos",
        },
        {
          name: "Arco",
          description: "Um arco recurvo",
          weight: 2,
          class: "Arqueiro",
          type: "duas mãos",
        },
      ],
      plusIcon: require("../assets/plus.svg"),
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
</style>