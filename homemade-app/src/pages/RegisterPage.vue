<template>
    <div class="container">
      <h1 class="text-2xl font-bold">Inscription</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit" class="btn">S'inscrire</button>
      </form>
      <p>Déjà un compte ? <router-link to="/login">Se connecter</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../store/userStore';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const userStore = useUserStore();
  const router = useRouter();
  
  const register = () => {
    userStore.login({ email: email.value });
    router.push('/');
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  </style>
  