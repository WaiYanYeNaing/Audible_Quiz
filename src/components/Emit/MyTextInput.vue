<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["customChange"]);
let handleChange = (event) => {
  emit("customChange", event.target.value.toUpperCase());
};
</script>

<template>
  <div>
    <label>My Custom Input</label>
    <input type="text" placeholder="Custom input!" @input="handleChange" />
  </div>
</template>