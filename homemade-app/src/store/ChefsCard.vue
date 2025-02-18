<template>
  <div class="chef-card">
    <img :src="chef.image" alt="Chef" class="chef-image" />
    <h2 class="text-xl font-bold">{{ chef.name }}</h2>
    <p>{{ chef.specialty }}</p>
  </div>
</template>

<script setup>
defineProps(['chef']);
</script>

<style scoped>
.chef-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
}

.chef-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
