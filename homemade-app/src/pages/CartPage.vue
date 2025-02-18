<template>
    <div class="container">
      <h1 class="text-2xl font-bold">Mon Panier</h1>
      <div v-if="cart.items.length === 0">
        <p>Votre panier est vide.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(dish, index) in cart.items" :key="index">
            {{ dish.name }}
            <button @click="removeFromCart(index)">Retirer</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../store/cartStore';
  
  const cart = useCartStore();
  
  const removeFromCart = (index) => {
    cart.removeFromCart(index);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  button {
    margin-left: 10px;
    color: red;
  }
  </style>
  