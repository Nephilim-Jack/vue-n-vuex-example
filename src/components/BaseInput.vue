<template>
  <div class="custom-input">
    <label :for="inputName">{{ helpText }}</label>
    <input
      @input="$emit('valueChange', inputValue)"
      :name="inputName"
      :type="inputType"
      :placeholder="inputPlaceholder"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  props: {
    helpText: String,
    inputPlaceholder: String,
    inputName: String,
    inputType: {
      type: String,
      default: "text",
    },
  },
  data: function () {
    return {
      inputValue: "",
    };
  },
});
</script>

<style>
.custom-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>