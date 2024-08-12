<template>
  <button @click="goBack" class="btn btn-secondary">Retour à Accueil</button>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();


const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
</style>
