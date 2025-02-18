<template>
  <div class="container">
    <h1 class="text-2xl font-bold">Nos Chefs</h1>
    <div v-for="chef in chefs" :key="chef.id">
      <router-link :to="'/chef/' + chef.id">
        <ChefCard :chef="chef" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ChefCard from '../components/ChefCard.vue';

const chefs = ref([]);

onMounted(() => {
  chefs.value = [
    { id: 1, name: "Chef Pierre", specialty: "Cuisine Française", image: "/images/chef-pierre.jpg" },
    { id: 2, name: "Chef Maria", specialty: "Cuisine Italienne", image: "/images/chef-maria.jpg" },
  ];
});
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 20px;
  margin: auto;
}
</style>
