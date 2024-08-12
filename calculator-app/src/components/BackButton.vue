<!-- src/components/BackButton.vue -->
<template>
  <button @click="goBack" class="btn btn-secondary">Retour à Accueil</button>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'BackButton',
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.push('/');
    };

    return {
      goBack
    };
  }
};
</script>

<style scoped>
/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>
