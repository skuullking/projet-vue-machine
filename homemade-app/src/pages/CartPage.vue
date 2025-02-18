<template>
    <div class="container">
      <h1 class="text-2xl font-bold">Mon Panier</h1>
      <div v-if="cart.items.length === 0">
        <p>Votre panier est vide.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(dish, index) in cart.items" :key="index" class="cart-item">
            <img :src="dish.image" alt="Plat" class="dish-image" />
            {{ dish.name }}
            <button @click="removeFromCart(index)" class="btn">Retirer</button>
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
  
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .dish-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  button {
    margin-left: 10px;
    color: red;
  }
  </style>
  