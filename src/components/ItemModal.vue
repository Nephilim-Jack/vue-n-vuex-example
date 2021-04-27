<template>
  <div id="item-modal">
    <label for="itemName">Nome</label>
    <input
      class="input-object"
      v-model="itemName"
      name="itemName"
      type="text"
      placeholder="Nome do item"
    />

    <label for="itemDescription">Descrição</label>
    <textarea
      class="input-object"
      id="textArea"
      v-model="itemDescription"
      name="itemDescription"
      type="text"
      placeholder="Descrição do item"
    />

    <label for="itemWeight">Peso em quilos</label>
    <input
      class="input-object"
      v-model="itemWeight"
      name="itemWeight"
      type="number"
      placeholder="Peso do item"
    />

    <label for="itemClass">Classe</label>
    <select class="input-object selectors" v-model="itemClass" name="itemClass">
      <option
        v-for="(itemClass, index) in classes"
        :value="itemClass"
        :key="index"
      >
        {{ itemClass }}
      </option>
    </select>

    <label for="itemType">Tipo</label>
    <select class="input-object selectors" v-model="itemType" name="itemType">
      <option v-for="(itemType, index) in types" :value="itemType" :key="index">
        {{ itemType }}
      </option>
    </select>
    <button id="new-item-btn" @click="addItem">Adicionar Item</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ItemModal",
  data() {
    return {
      classes: ["Mago", "Arqueiro", "Guerreiro"],
      types: ["Uma Mão", "Duas Mãos"],
      itemName: "",
      itemDescription: "",
      itemWeight: "",
      itemClass: "",
      itemType: "",
    };
  },
  methods: {
    addItem() {
      if (
        this.itemName &&
        this.itemDescription &&
        this.itemWeight &&
        this.itemClass &&
        this.itemType
      ) {
        this.$store.commit("addItem", {
          name: this.itemName,
          description: this.itemDescription,
          weight: this.itemWeight,
          class: this.itemClass,
          type: this.itemType,
        });
      }
    },
  },
});
</script>

<style>
#item-modal {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  border: 1px solid #c9c9c9;
  padding: 8px;
  width: 320px;
  height: 460px;
  right: 32px;
  bottom: 128px;
  animation: slide-in 0.5s linear both;
}

.input-object {
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #c9c9c9;
  background-color: white;
  height: 24px;
  border-radius: 8px;
  outline: none;
  padding: 4px;
  text-align: center;
}

.input-object::placeholder {
  color: #d9d9d9;
}

.input-object:focus {
  border: 1px solid #6acff1;
  box-shadow: 0 0 8px 2px #6acff132;
}

#textArea {
  height: 40px;
  text-align: center;
  line-height: 40px;
}

#textArea::placeholder {
  text-align: center;
  line-height: 40px;
}

.selectors {
  height: auto;
}

#new-item-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #06d6a0;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
}
#new-item-btn:hover {
  background-color: #049f76;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    margin-bottom: -40px;
  }
  100% {
    opacity: 1;
    margin-bottom: 0px;
  }
}
</style>