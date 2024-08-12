<template>
  <div class="container">
    <h1>Addition</h1>
    <form @submit.prevent="calculate">
      <div class="mb-3">
        <label for="value1" class="form-label">Valeur 1</label>
        <input v-model.number="value1" type="number" id="value1" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="value2" class="form-label">Valeur 2</label>
        <input v-model.number="value2" type="number" id="value2" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Calculer</button>
    </form>
    <p v-if="result !== null" class="result">Résultat : {{ result }}</p>
    <p v-if="error" class="error">{{ error }}</p>
    <BackButton />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BackButton from '../components/BackButton.vue';

const value1 = ref(0);
const value2 = ref(0);
const result = ref(null);
const error = ref(null);

function calculate() {
  if (isNaN(value1.value) || isNaN(value2.value)) {
    error.value = 'Veuillez entrer des nombres valides.';
    result.value = null;
  } else {
    error.value = null;
    result.value = value1.value + value2.value;
  }
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin: 10px 0;
}
.form-label {
  color: aqua;
}
.btn {
  margin: 10px 0;
  width: 60%;
  padding: 8px;
}
.result {
  color: #00FFFF; 
}
.error {
  color: red;
}
</style>
