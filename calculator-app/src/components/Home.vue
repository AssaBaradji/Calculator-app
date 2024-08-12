<template>
  <div class="container">
    <h1>Calculatrice</h1>
    <div class="radio-group">
      <label class="radio-item">
        <input type="radio" value="Add" v-model="selectedOperation" /> Addition
      </label>
      <label class="radio-item">
        <input type="radio" value="Subtract" v-model="selectedOperation" /> Soustraction
      </label>
      <label class="radio-item">
        <input type="radio" value="Multiply" v-model="selectedOperation" /> Multiplication
      </label>
      <label class="radio-item">
        <input type="radio" value="Divide" v-model="selectedOperation" /> Division
      </label>
    </div>
    <router-link :to="`/${selectedOperation}`" class="btn">Go</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedOperation = ref('Add');
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.radio-item {
  color: white;
  font-size: 20px;
  display: flex;
}

input[type="radio"] {
  display: flex;
  flex-direction: column;
}

.btn {
  background-color: aqua;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

h1 {
  font-size: 50px;
  color: white;
}
</style>
