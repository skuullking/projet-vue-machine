<template>
  <div class="border p-4">
    <h2 class="text-xl font-bold">{{ dish.name }}</h2>
    <button @click="$emit('add', dish)" class="btn">Ajouter au panier</button>
  </div>
</template>

<script setup>
defineProps(['dish']);
</script>
