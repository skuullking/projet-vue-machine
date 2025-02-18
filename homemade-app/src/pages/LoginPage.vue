<template>
    <div class="container">
      <h1 class="text-2xl font-bold">Connexion</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mot de passe" required />
        <button type="submit" class="btn">Se connecter</button>
      </form>
      <p>Pas encore inscrit ? <router-link to="/register">Créer un compte</router-link></p>
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
  
  const login = () => {
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
  