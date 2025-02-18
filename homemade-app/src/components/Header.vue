<template>
  <header class="p-4 bg-blue-600 text-white flex justify-between">
    <router-link to="/">HomeMade</router-link>
    <div>
      <router-link to="/chefs" class="mr-4">Chefs</router-link>
      <router-link to="/cart">Cart ({{ cart.items.length }})</router-link>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '../store/cartStore';
const cart = useCartStore();
</script>
