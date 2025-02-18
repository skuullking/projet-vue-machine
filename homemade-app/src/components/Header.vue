<template>
  <header>
    <div>
      <router-link to="/" class="btn">HomeMade</router-link>
      <router-link to="/chefs" class="btn">Chefs</router-link>
      <router-link to="/cart" class="btn">Panier ({{ cart.items.length }})</router-link>
      <router-link to="/login" class="btn">Connexion</router-link>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '../store/cartStore';
const cart = useCartStore();
</script>
