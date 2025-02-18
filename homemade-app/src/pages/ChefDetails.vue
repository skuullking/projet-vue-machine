<template>
  <div class="container">
    <h1 class="text-2xl font-bold">{{ chef.name }}</h1>
    <p>Spécialité: {{ chef.specialty }}</p>
    <h2 class="text-xl mt-4">Plats disponibles</h2>
    <div v-for="dish in chef.dishes" :key="dish.id">
      <DishCard :dish="dish" @add="addToCart(dish)" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store/cartStore';
import DishCard from '../components/DishCard.vue';

const route = useRoute();
const cart = useCartStore();

const chef = ref({
  name: '',
  specialty: '',
  dishes: [],
});

onMounted(() => {
  const chefsData = [
    { id: 1, name: "Chef Pierre", specialty: "Cuisine Française", dishes: [{ id: 101, name: "Bœuf Bourguignon" }] },
    { id: 2, name: "Chef Maria", specialty: "Cuisine Italienne", dishes: [{ id: 201, name: "Pâtes Carbonara" }] },
  ];
  chef.value = chefsData.find(c => c.id == route.params.id);
});

const addToCart = (dish) => {
  cart.addToCart(dish);
};
</script>
