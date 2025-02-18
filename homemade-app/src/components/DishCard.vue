<template>
  <div class="border p-4">
    <h2 class="text-xl font-bold">{{ dish.name }}</h2>
    <img :src="dish.image" alt="Dish" class="dish-image" />
    <button @click="$emit('add', dish)" class="btn">Ajouter au panier</button>
  </div>
</template>

<script setup>
defineProps(['dish']);
</script>

<style scoped>
.dish-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
