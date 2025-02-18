<template>
    <div class="container">
      <h1 class="text-2xl font-bold">Bienvenue sur HomeMade</h1>
      <p>Découvrez nos chefs et leurs spécialités.</p>
      <router-link to="/chefs" class="btn">Voir les chefs</router-link>
      <router-link to="/register" class="btn">S'inscrire</router-link>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../store/userStore';
  
  const userStore = useUserStore();
  </script>
  
  <style scoped>
  .container {
    max-width: 100%;
    padding: 20px;
    margin: auto;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .btn:hover {
    background: #0056b3;
  }
  </style>
  