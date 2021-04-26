<template>
  <div class="custom-input">
    <label :for="inputName">{{ helpText }}</label>
    <input
      class="input-object"
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

.input-object {
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #c9c9c9;
  background-color: white;
  height: 32px;
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
</style>