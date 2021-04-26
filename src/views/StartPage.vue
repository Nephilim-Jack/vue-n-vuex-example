<template>
  <div id="create-player-container">
    <div id="create-wrapper">
      <BaseInput
        v-for="(input, index) in inputsData"
        :helpText="input.helpText"
        :key="index"
        :inputName="input.name"
        :inputPlaceholder="input.placeholder"
        :inputType="input.type"
        @valueChange="input.handler"
      />
    </div>
    <button @click="moveToInventory">
      <span>Criar personagem</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "../components/BaseInput.vue";

interface PlayerInputProps {
  playerName: string;
  playerClass: string;
  inventorySlots: number;
}

export default defineComponent({
  name: "StartPage",
  components: {
    BaseInput,
  },
  data: function () {
    return {
      inputs: {
        playerName: "",
        playerClass: "",
        inventorySlots: 0,
      },
      inputsData: [
        {
          name: "playerName",
          helpText: "Nome",
          placeholder: "Nome do personagem",
          handler: (e: string) => this.handleInput(e, "playerName"),
          type: "text",
        },
        {
          name: "playerClass",
          helpText: "Classe",
          placeholder: "Classe do personagem",
          handler: (e: string) => this.handleinput(e, "playerClass"),
          type: "text",
        },
        {
          name: "inventorySlots",
          helpText: "Inventário",
          placeholder: "Espaço no inventário",
          handler: (e: string) => this.handleinput(Number(e), "inventorySlots"),
          type: "number",
        },
      ],
    };
  },
  methods: {
    handleinput: function (value: never, changeVar: keyof PlayerInputProps) {
      this.inputs[changeVar] = value;
      console.log(this.inputs);
    },
    moveToInventory: function () {
      this.$router.push("Inventory");
    },
  },
});
</script>

<style>
#create-player-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 420px;
  border-radius: 16px;
  background-color: #f9f9f9;
  margin: auto;
  transform: translateY(50%);
}
#create-wrapper {
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>